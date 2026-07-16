document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const clearBtn = document.getElementById('clear-btn');
    const STORAGE_KEY = 'text_editor_content';

    // 1. При загрузке страницы восстанавливаем текст из localStorage
    const savedText = localStorage.getItem(STORAGE_KEY);
    if (savedText) {
        editor.value = savedText;
    }

    // 2. При каждом изменении текста сохраняем его в localStorage
    editor.addEventListener('input', () => {
        localStorage.setItem(STORAGE_KEY, editor.value);
    });

    // 3. Логика кнопки «Очистить содержимое»
    clearBtn.addEventListener('click', () => {
        // Очищаем поле
        editor.value = '';

        // Удаляем запись из localStorage (чтобы после перезагрузки было пусто)
        localStorage.removeItem(STORAGE_KEY);

        // Опционально: можно убрать фокус с кнопки, если нужно
        clearBtn.blur();
    });
});

