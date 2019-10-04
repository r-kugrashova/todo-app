import {CHANGE_FILTER} from "./actionTypes";

const activeFilter = 'All';

export default function filters(state = activeFilter, action) {
    switch (action.type) {
        case CHANGE_FILTER: {
            return action.data;
        }
    }
    return state;
}