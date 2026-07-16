document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('subscribe-modal');
    const closeBtn = document.querySelector('.modal__close');
    const COOKIE_NAME = 'modal_closed';
    const COOKIE_VALUE = '1';
    const DAYS_TO_EXPIRE = 365; // храним год, чтобы точно не появлялось

    // Функция для установки cookie
    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    // Функция для получения cookie
    function getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Функция показа окна
    function showModal() {
        modal.classList.add('modal_active');
    }

    // Функция скрытия окна
    function hideModal() {
        modal.classList.remove('modal_active');
    }

    // Логика при загрузке страницы
    const isClosed = getCookie(COOKIE_NAME);
    if (!isClosed) {
        // Если cookie нет — показываем окно
        showModal();
    }

    // Обработчик закрытия по крестику
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            hideModal();
            // Ставим cookie, что окно закрыто
            setCookie(COOKIE_NAME, COOKIE_VALUE, DAYS_TO_EXPIRE);
        });
    }
});
