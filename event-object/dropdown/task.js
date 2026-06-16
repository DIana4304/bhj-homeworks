document.querySelectorAll('.dropdown').forEach(container => {
    const drop_div = container.querySelector('.dropdown__value');
    const drop_list = container.querySelector('.dropdown__list');
    const drop_item = container.querySelectorAll('.dropdown__item');

    drop_div.addEventListener('click', () => {
        if (drop_list.classList.contains('dropdown__list_active')){
            drop_list.classList.remove('dropdown__list_active');
        }
        else {
            drop_list.classList.add('dropdown__list_active');
        }
    });


    drop_item.forEach(i => {
        i.addEventListener('click', (e) => {
            let content = i.textContent;
            drop_div.textContent = content;
            drop_list.classList.remove('dropdown__list_active');
            e.preventDefault();
        });
    });
});
