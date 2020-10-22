import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideoList from './../actions/videoList.js';

const mapStateToProps = (store) => {
  return {
    video: store.currentVideo
  };

};

// const mapDispatchToProps = (dispatch) => ({
//   onClick: (video) => dispatch(changeVideo(video))
// });

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;

