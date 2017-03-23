export default function courseReducer(state = [], action){
  switch (action.type){
    case 'CREATE_COURSE':
      return [...state, // spread operator, explode or create new instance of state array
             Object.assign({}, action.course)
             ];

    default:
      return state;
  }
}
