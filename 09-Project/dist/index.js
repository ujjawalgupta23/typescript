"use strict";
// function printDouble(message: string) {
//     console.log(message);
//     console.log(message);
// }
const btn = document.getElementById("btn");
/**
 * Non-Null Assertion Operator
 * When I definetly know that my varaible will get a value and it will not be null,
 * then I can add '!' infront of it
 */
// const btn1 = document.getElementById("btn")!;
// btn1.addEventListener("click", () => alert("CLICKED!!"));
/**
 * Type Assertion:-
 * Sometimes, we might have more specific information about a value's type,
 * and we want to make sure, TS knows it too.
 *
 * We can assert a value's type by using the 'as' keyword,
 * followed by the specific type we want to assert.
 */
const message = "Hello Ujjawal";
// console.log(message.toUpperCase()); // Here TS is not sure, but we are that it will be string
console.log(message.toUpperCase()); // now it's fine
// Type Assertion
const todo = document.getElementById("todo");
// btn?.addEventListener("click", () => {
//     alert(todo.value);
//     todo.value = "";
// });
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    // just for TS, if todosJSON is null,
    if (todosJSON === null) {
        return [];
    }
    return JSON.parse(todosJSON);
}
function handleSubmit(e) {
    // here TS will get confused what is this e, so assign 'SubmitEvent'
    e.preventDefault();
    // console.log("SUBMITTED!");
    const newTodo = {
        text: todo.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    todo.value = "";
    // Connecting to local storage in browser memory to string
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodo(todo) {
    const newTodoVal = todo.text;
    const newLI = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", () => {
        // console.log("Clicked!!");
        todo.completed = checkBox.checked;
        saveTodos();
    });
    newLI.append(newTodoVal);
    newLI.append(checkBox);
    list === null || list === void 0 ? void 0 : list.append(newLI);
    saveTodos();
}
// In Anonymous functions, it will figure out what 'e' is
form.addEventListener("submit", handleSubmit);
