const container = document.querySelector('#tasks');
const taskInput = document.querySelector('#task__input');
const tasksList = document.querySelector('#tasks__list');

container.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
        event.preventDefault();

        const task = document.createElement('div');
        task.classList.add('task');
        tasksList.appendChild(task);

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = taskInput.value;
        task.appendChild(taskTitle);

        // очищаем поле
        taskInput.value = '';

        const taskRemove = document.createElement('a');
        taskRemove.textContent = '⨯';
        taskRemove.href = '#';
        taskRemove.classList.add('task__remove');
        task.appendChild(taskRemove);


        taskRemove.addEventListener('click', (e) => {
            task.remove();
        });
    }
});