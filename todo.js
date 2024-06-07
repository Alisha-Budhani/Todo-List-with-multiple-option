let addList = document.querySelector(".add");
let todoAdd = document.querySelector(".todos");
let searchTodo = document.querySelector('.search');

addList.addEventListener('submit', (e)=>{
    e.preventDefault();
    let todoValue = addList.add.value.trim();
    if(todoValue.length > 0){
        getTodoList(todoValue);
        addList.reset();
    }
});

function getTodoList(todo){
    let list = `
     <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>`;
      todoAdd.innerHTML += list;

}

searchTodo.addEventListener('keyup', (e)=>{
    searchText = searchTodo.search.value.toLowerCase().trim();
    filterTodo(searchText);
})

function filterTodo(todo){
    Array.from(todoAdd.children)
    .filter(todos => !todos.textContent.toLocaleLowerCase().includes(todo))
    .forEach(todos => todos.classList.add('filtered'))

    Array.from(todoAdd.children)
    .filter(todos => todos.textContent.includes(todo))
    .forEach(todos => todos.classList.remove('filtered'))
}

todoAdd.addEventListener('click',(e)=>{
   if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
   }
})

