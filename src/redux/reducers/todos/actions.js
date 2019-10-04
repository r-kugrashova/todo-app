import {CHANGE_TODO} from "./actionTypes";
import {NEW_TODO} from "./actionTypes";

export function changeTodo(data) {

    return {
        type: CHANGE_TODO,
        data
    }
}

export function newTodo (data) {

    return{
        type: NEW_TODO,
        data
    }
}
