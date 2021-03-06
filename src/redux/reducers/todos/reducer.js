import {CHANGE_TODO} from "./actionTypes";
import {NEW_TODO} from "./actionTypes";

const initialState = [

    {
        id: 1,
        text: 'Todo 1',
        done: false,
    },

    {
        id: 2,
        text: 'Todo 2',
        done: false,
    },

    {
        id: 3,
        text: 'Todo 3',
        done: true,
    },
];

export default function todos (state = initialState, action) {

    switch (action.type) {

        case CHANGE_TODO: {
            return state.map(todo => {
                if (todo.id === action.data)
                    todo.done = !todo.done
                return todo;
            });
        };

        case NEW_TODO: {
            const newState = [...state];
            newState.push(
                {
                    id: newState.length+1,
                    text: action.data,
                    done: false,
                });
            return newState
        }

        default:
            break;
    }
    return state;
}
