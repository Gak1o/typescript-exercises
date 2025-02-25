"use strict";
const todos = [];
const addTodo = () => {
    for (let i = 0; i < 9; i++) {
        todos.push({ taskname: "Hello", finished: true });
    }
};
addTodo();
console.log(todos);
