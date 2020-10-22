import Redux from 'redux';
//type = CHANGE_CURRENT_VIDEO
var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return Object.assign({}, state, action.video);
  default:
    return state;
  }
};

export default currentVideoReducer;
