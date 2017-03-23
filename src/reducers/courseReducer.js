import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action){
  switch (action.type){
    case types.CREATE_COURSE:
      return [...state, // spread operator, explode or create new instance of state array
             Object.assign({}, action.course)
             ];

    default:
      return state;
  }
}
