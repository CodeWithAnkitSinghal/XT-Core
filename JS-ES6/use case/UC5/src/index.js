console.log('Script connected');
console.log('TODO App');
// Model
class Todo {
    constructor(title, date) {
        Todo.nextId++;
        this.id = Todo.nextId; // auto_increment
        this.title = title;
        this.completed = false
        this.date = date
    }
}

var todoList = [];

Todo.nextId = 0;
// Service
class TodosService {
    constructor() { }
    /*
    this function will add a new item in todolist
    new item is stored in item var and then pushed to todolist
    */
    addTodo(title) {
        console.log('Add todo');
        var d = new Date();
        var item = new Todo(title, d.toLocaleDateString());
        todoList.push(item);
    }

    /*
    this function will edit a todo item based on the id provided by you
    it will first search the index of that item whose id is entered
    then update the item on that index with new title
    */
    editTodo(id, newTitle) {
        console.log('edit todo');
        var todoToEditIndex = todoList.findIndex(obj => obj.id == id);
        todoList[todoToEditIndex].title = newTitle;
    }

    /*
    this function will set the completed property to true whose id the user will send in the function
    it will first find the index of the item whose id is entered by user
    then will updated the completed property to true
    */
    completeTodo(id) {
        console.log('complete todo');
        var todoToEditIndex = todoList.findIndex(obj => obj.id == id);
        todoList[todoToEditIndex].completed = true;
    }

    /*
    this function will set the completed property of all item to true   
    we are looping through each and every item using foreach and setting the completed property using arrow function   
    */
    completeAll() {
        console.log('complete All todo');
        todoList.forEach((item) => {
            item.completed = true;
        });
    }

    /*
    this function deletes the item from todolist whose id is entered by the user
    this is done using filter function over the todolist and filtering in the items whose id is not equal to the entered id
    */
    deleteTodo(id) {
        console.log('Delete todo');
        var a = todoList.filter(function (obj) {
            return obj.id !== id;
        });

        todoList = a;
    }

    /*
    this function will clear all item whose completed property is true
    we iterate over the todolist and for each item whose completed property is true we call the delete function of this service
    passing the id of that item
    */
    clearCompleted() {
        console.log('Delete the completed todo');
        todoList.forEach((item) => {
            if (item.completed === true) {
                this.deleteTodo(item.id);
            }
        });
    }

    /*
    this function simply prints the todolist
    */
    viewTodos(filter) {
        console.log('View Todo');
        console.log(todoList);
    }
}

const service = new TodosService();
