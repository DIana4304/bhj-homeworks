document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items');
    const loader = document.getElementById('loader');

    // Функция форматирования числа до 2 знаков после запятой
    const formatValue = (val) => {
        if (typeof val === 'number') {
            return val.toFixed(2);
        }
        return val;
    };

    // --- ИМИТАЦИЯ ЗАПРОСА (чтобы работало даже без интернета и CORS) ---
    // Это заменяет fetch. Сервер "отвечает" через 2000 мс.
    setTimeout(() => {
        const mockData = {
            date: "2019-02-18 14:30:56",
            response: {
                Valute: {
                    USD: { CharCode: "USD", Value: 90.50 },
                    EUR: { CharCode: "EUR", Value: 99.80 },
                    CNY: { CharCode: "CNY", Value: 12.45 },
                    GBP: { CharCode: "GBP", Value: 115.30 }
                }
            }
        };

        processData(mockData);
    }, 2000); // Имитация задержки сети (slow-get-courses)

    // реальный запрос

    // const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

    // fetch(url)
    //     .then(response => {
    //         if (!response.ok) throw new Error('Network response was not ok');
    //         return response.json();
    //     })
    //     .then(data => {
    //         loader.classList.remove('loader_active');
    //         processData(data);
    //     })
    //     .catch(error => {
    //         console.error('Ошибка загрузки:', error);
    //         loader.classList.remove('loader_active');
    //         itemsContainer.innerHTML = '<p style="color: red;">Не удалось загрузить данные (сервер недоступен или CORS)</p>';
    //     });

    function processData(data) {
        // 1. Скрываем анимацию загрузки
        loader.classList.remove('loader_active');

        const valuteData = data.response?.Valute;

        if (!valuteData) {
            itemsContainer.innerHTML = '<p style="color: red;">Нет данных о курсах валют</p>';
            return;
        }

        // Очищаем контейнер от заглушки (если была)
        itemsContainer.innerHTML = '';

        // 2. Проходимся по всем валютам
        Object.entries(valuteData).forEach(([code, currencyInfo]) => {
            // Создаем обертку .item
            const itemDiv = document.createElement('div');
            itemDiv.className = 'item';

            // Создаем .item__code
            const codeDiv = document.createElement('div');
            codeDiv.className = 'item__code';
            codeDiv.textContent = currencyInfo.CharCode || code;

            // Создаем .item__value
            const valueDiv = document.createElement('div');
            valueDiv.className = 'item__value';
            valueDiv.textContent = formatValue(currencyInfo.Value);

            // Создаем .item__currency
            const currencyDiv = document.createElement('div');
            currencyDiv.className = 'item__currency';
            currencyDiv.textContent = 'руб.';

            // Собираем элемент
            itemDiv.appendChild(codeDiv);
            itemDiv.appendChild(valueDiv);
            itemDiv.appendChild(currencyDiv);

            // Добавляем в список
            itemsContainer.appendChild(itemDiv);
        });
    }
});

