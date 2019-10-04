import {CHANGE_FILTER} from "./actionTypes";

const filters_start = [
    {
        id: 'All',
        done: true,
    },

    {
        id: 'Completed',
        done: false,
    },

    {
        id: 'Incompleted',
        done: false,
    }
];

export default function filters(state = filters_start, action) {
    switch (action.type) {
        case CHANGE_FILTER: {
            return state.map(filter => {
                if (filter.id === action.data) {
                    filter.done = true
                } else {
                    filter.done = false
                }
                return filter;
            })
        }
    }
    return state;
}