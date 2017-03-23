import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action){
  switch (action.type){
    case types.CREATE_COURSE:
      return [...state, // spread operator, explode or create new instance of state array
             Object.assign({}, action.course)
             ];
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
