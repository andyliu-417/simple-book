import * as actionTypes from './actionType';

export const foo = () => ({
    type: actionTypes.FOO
}); 

export const focused = (data) => ({
    type: actionTypes.FOCUSED,
    data: data
}); 