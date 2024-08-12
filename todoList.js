// TODO List
// FEATURES:
/*
- Create todo item 
    - ID (generate random)
    - title 
    - description
    - creation time
    - last update time
    - is completed or not
- Update todo item
    - title 
    - description
- Delete todo item
    - using ID
- Get All todos
- Get One todo (using id)

- Store all the data in Array and Objects
*/

let todoList = []
let currentTime = new Date().toLocaleTimeString();

function createTodoItem(id,title, description) {   
    let todo = {
        id: id,
        title: title,
        description: description,
        creationTime: currentTime,
        lastUpdateTime: currentTime,
        completed: false
    }
    todoList.push(todo)
}
//Math.random().toString(36).substring(2,9)


createTodoItem(1,"abc", "ABCD")
createTodoItem(2,"xyz", "XYZ")
createTodoItem(3,"pqr", "PQR")

function getAllTodos() {
    console.log(todoList)
}
//console.log("Before updation: ")
//getAllTodos()

function getTodoById(id) {
    const todo = todoList.find(item => item.id === id)
    if(todo) {
        console.log(todo);
    } else {
        console.log("No todo found");
    }
}

//getTodoById(2)

function updateTodo(id, newTitle, newDesc) {
    const todo = todoList.find(item => item.id === id)
    if(todo) {
        todo.title = newTitle,
        todo.description = newDesc,
        todo.lastUpdateTime = currentTime
    } else {
        console.log("No todo found");
    }
}
// console.log("After updation:");
// updateTodo(1, "pqr", "PQR")
// getAllTodos()

function deleteTodo(id) {
    const todo = todoList.findIndex(item => item.id === id)
    if(todo) {
        todoList.splice(todo,1)
    } else {
        console.log("No todo found");
    }
}

//deleteTodo(2)
//getAllTodos()

