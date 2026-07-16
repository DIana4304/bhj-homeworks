document.addEventListener('DOMContentLoaded', () => {
    const signinBlock = document.getElementById('signin');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
    const form = document.getElementById('signin__form');
    const btn = document.getElementById('signin__btn');

    // Ключ для localStorage
    const STORAGE_KEY = 'user_id';

    /**
     * Функция переключения видимости блоков
     */
    function toggleView(isLoggedIn) {
        if (isLoggedIn) {
            signinBlock.classList.remove('signin_active');
            welcomeBlock.classList.add('welcome_active');
        } else {
            signinBlock.classList.add('signin_active');
            welcomeBlock.classList.remove('welcome_active');
        }
    }

    /**
     * Инициализация при загрузке страницы
     * Проверяем localStorage. Если есть ID пользователя — считаем, что он залогинен.
     */
    function init() {
        const savedUserId = localStorage.getItem(STORAGE_KEY);

        if (savedUserId) {
            // Пользователь уже авторизован (по данным хранилища)
            userIdSpan.textContent = savedUserId;
            toggleView(true);
        } else {
            // Пользователь не авторизован, показываем форму
            toggleView(false);
        }
    }

    /**
     * Обработка отправки формы
     */
    btn.addEventListener('click', (e) => {
        e.preventDefault(); // Отменяем стандартную отправку формы (чтобы не было перезагрузки)

        // Собираем данные из формы через FormData
        const formData = new FormData(form);
        const data = {
            login: formData.get('login'),
            password: formData.get('password')
        };

        // Отправляем POST запрос
        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    // Успешная авторизация
                    const id = result.user_id;

                    // 1. Сохраняем ID в localStorage
                    localStorage.setItem(STORAGE_KEY, id);

                    // 2. Обновляем текст и показываем блок приветствия
                    userIdSpan.textContent = id;
                    toggleView(true);

                    console.log('Успешный вход. ID:', id);
                } else {
                    // Ошибка авторизации
                    alert('Неверный логин/пароль');
                    console.log('Ошибка входа');
                }
            })
            .catch(error => {
                console.error('Ошибка сети или сервера:', error);
                alert('Произошла ошибка соединения с сервером.');
            });
    });

    // Запуск инициализации
    init();
});
