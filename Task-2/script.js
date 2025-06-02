document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    const fields = {
        name: { value: form.name.value.trim(), error: 'nameError', required: true },
        email: { 
            value: form.email.value.trim(), 
            error: 'emailError', 
            required: true, 
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
        },
        phone: { 
            value: form.phone.value.trim(), 
            error: 'phoneError', 
            regex: /^\d{10}$/ 
        },
        message: { value: form.message.value.trim(), error: 'messageError', required: true }
    };
    Object.values(fields).forEach(field => {
        document.getElementById(field.error).style.display = 'none';
    });

    for (const [fieldName, field] of Object.entries(fields)) {
        if (field.required && !field.value) {
            return showError(field.error);
        }
        if (field.regex && field.value && !field.regex.test(field.value)) {
            return showError(field.error);
        }
    }

    alert('Form submitted successfully!');
    form.reset();
});

function showError(errorId) {
    document.getElementById(errorId).style.display = 'block';
}
document.getElementById('addTodoBtn').addEventListener('click', addTodo);
document.getElementById('todoInput').addEventListener('keypress', e => {
    if (e.key === 'Enter') addTodo();
});

function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();
    if (!text) return alert('Please enter a task');
    
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
        <span class="todo-text">${text}</span>
        <button class="delete-btn">Delete</button>
    `;
    li.querySelector('.delete-btn').addEventListener('click', () => li.remove());
    
    document.getElementById('todoList').appendChild(li);
    input.value = '';
}