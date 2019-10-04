import {CHANGE_FILTER} from "./actionTypes";

const initialFilterState = [
    'All'
];



export default function filters(state = initialFilterState, action) {
    switch (action.type) {
        case CHANGE_FILTER: {
            // console.log('ACTION DATA', action.data);
            // return state.map(filter => {
            //     if (filter.id === action.data) {
            //         filter = true
            //     } else {
            //         filter.done = false
            //     }
            const filter = action.data;
                return filter;
            // })
        }
    }
    return state;
}