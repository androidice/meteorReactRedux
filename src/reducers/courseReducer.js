export default function courseReducer(state = [], action){
  switch (action.type){
    case 'CREATE_COURSE':
      state.push(action.course); // should not be done, because reducer should be a pure function, and
      /// should not handle state mutations
      return state;
    break;

    default:
      return state;
  }
}
