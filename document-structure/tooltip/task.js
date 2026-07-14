const links = document.querySelectorAll('.has-tooltip');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelectorAll('.tooltip').forEach(t => t.classList.remove('tooltip_active'));

        const placeholder = document.createElement('div');
        placeholder.classList.add('tooltip');
        placeholder.textContent = link.title;

        const rect = link.getBoundingClientRect();
        placeholder.style.left = rect.left + 'px';
        placeholder.style.top = (rect.bottom + window.scrollY + 8) + 'px';
        placeholder.classList.add('tooltip_active');

        link.appendChild(placeholder);

        console.log(link.title);
    });
});

document.addEventListener('dblclick', () => {
    document.querySelectorAll('.tooltip').forEach(t => t.classList.remove('tooltip_active'));
});