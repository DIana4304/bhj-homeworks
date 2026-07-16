document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file');
    const progressBar = document.getElementById('progress');
    const form = document.getElementById('form');
    const sendBtn = document.getElementById('send');
    const fileDesc = document.querySelector('.input__wrapper-desc');

    fileInput.onchange = function () {
        let fileName = this.value.split('\\');
        fileName = fileName[fileName.length - 1];
        fileDesc.textContent = fileName;
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const file = fileInput.files[0];

        if (!file) {
            alert('Пожалуйста, выберите файл');
            return;
        }

        sendBtn.disabled = true;
        sendBtn.textContent = 'Загрузка...';

        progressBar.value = 0;

        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

        // Отслеживание прогресса загрузки
        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                progressBar.value = percentComplete;
            }
        };

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                alert('Файл успешно загружен!');
                // Можно сбросить форму, если нужно
                form.reset();
                fileDesc.textContent = 'Имя файла...';
                progressBar.value = 0;
            } else {
                alert('Ошибка при загрузке файла. Сервер вернул статус: ' + xhr.status);
            }
            sendBtn.disabled = false;
            sendBtn.textContent = 'Отправить';
        };

        xhr.onerror = () => {
            alert('Произошла ошибка сети при загрузке файла.');
            sendBtn.disabled = false;
            sendBtn.textContent = 'Отправить';
            progressBar.value = 0;
        };

        // Отправляем
        xhr.send(formData);
    });
});
