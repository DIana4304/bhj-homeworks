document.addEventListener('DOMContentLoaded', () => {
    const pollTitleEl = document.getElementById('poll__title');
    const pollAnswersEl = document.getElementById('poll__answers');

    // 1. Функция для отрисовки опроса
    const renderPoll = (title, answers) => {
        pollAnswersEl.innerHTML = '';

        pollTitleEl.textContent = title;

        answers.forEach(answerText => {
            const btn = document.createElement('button');
            btn.className = 'poll__answer';
            btn.textContent = answerText;

            btn.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });

            pollAnswersEl.appendChild(btn);
        });
    };

    // 2. Реальный запрос (по условию задания)
    const url = 'https://students.netoservices.ru/nestjs-backend/poll';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети или сервера');
            }
            return response.json();
        })
        .then(data => {
            const title = data.data?.title;
            const answers = data.data?.answers;

            if (title && Array.isArray(answers) && answers.length > 0) {
                renderPoll(title, answers);
            } else {
                fallbackRender();
            }
        })
        .catch(error => {
            console.error('Не удалось загрузить опрос:', error);
            fallbackRender();
        });

    // 3. Запасной вариант (Fallback) - демо-данные
    function fallbackRender() {
        console.warn('Используем демо-данные вместо реального API');
        const demoData = {
            title: 'Как вы относитесь к собакам?',
            answers: [
                'Хорошо',
                'Отлично',
                'Я люблю собак',
                'Кто тут?'
            ]
        };
        renderPoll(demoData.title, demoData.answers);
    }
});
