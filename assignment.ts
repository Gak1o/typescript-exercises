interface Todo {
    taskname: string;
    finished: boolean;
}

const todos: Todo[] = [];

const addTodo = () =>{
    for(let i:number = 0; i<9; i++){
        todos.push({taskname: "Hello", finished: true});
    }
}

addTodo();

console.log(todos);