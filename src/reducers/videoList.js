import Redux from 'redux';

let sampleData = [];
// '{type: 'CHANGE_VIDEO_LIST'}' action is changing video
var videoListReducer = (state = sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return action.videos;
  default:
    return state;

  }
};

export default videoListReducer;
