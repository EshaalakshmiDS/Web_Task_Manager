function addTask() {
    // Get form values
    const taskName = document.getElementById('taskName').value;
    const deadline = document.getElementById('deadline').value;
    const eventTime = document.getElementById('eventTime').value;
    const priority = document.getElementById('priority').value;
    const label = document.getElementById('label').value;

    // Create task element with checkbox
    const taskElement = document.createElement('li');
    taskElement.className = 'list-group-item';
    taskElement.innerHTML = `
        <input type="checkbox" onchange="completeTask(this)">
        <strong>${taskName}</strong>
        <span class="badge badge-secondary">${deadline} ${eventTime}</span>
        <span class="badge badge-primary">${priority}</span>
        <span class="badge badge-info">${label}</span>
    `;

    // Add task to the task list
    document.getElementById('taskList').appendChild(taskElement);

    // Clear form fields
    document.getElementById('taskForm').reset();
}

function completeTask(checkbox) {
    // Find the parent li element
    const taskElement = checkbox.parentElement;

    if (checkbox.checked) {
        // Move the task to the completed tasks list
        document.getElementById('completedTaskList').appendChild(taskElement);
    } else {
        // Move the task back to the task list
        document.getElementById('taskList').appendChild(taskElement);
    }
}
