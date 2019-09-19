import {CHANGE_FILTER} from './actionTypes';

export function changeFilter(data){
    return{
        type:CHANGE_FILTER,
        data
    }
}