const input = document.getElementById('todo-input')
const addbtn = document.getElementById('add-btn')
const todoList = document.getElementById('todo-list')

let todos = JSON.parse(localStorage.getItem('todos')) || [];


function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

addbtn.addEventListener('click', () => {
    const value = input.value.trim();

    if ( value === '') return alert('input tidak boleh kosong');
    todos.push(value)
    input.value = '';
    renderList();
    saveTodos()
})

function renderList() {
    todoList.textContent = '';

    todos.forEach((todo,index) => {
        const li = document.createElement('li');

        li.textContent = todo

        const delbtn = document.createElement('button');
        delbtn.textContent = 'HAPUS'
        delbtn.addEventListener('click', () => {
            todos.splice(index, 1);
            renderList()
            saveTodos();
        });

        li.appendChild(delbtn);
        todoList.appendChild(li)
    })
}
renderList();
