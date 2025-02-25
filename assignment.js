"use strict";
const todos = [];
const addTodo = () => {
    for (let i = 0; i < 9; i++) {
        todos.push(...todos, { taskname: "Hello", finished: true });
    }
};
addTodo();
console.log(todos);
