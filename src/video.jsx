import ReactPlayer from 'react-player';

function VideoPlayer() {

    return (
        <div id="video">
              <ReactPlayer
              url="/background.mov"
              volume= {0}
              className='banner-video'
              style={{ width: '100vw' }}
              playing={true}
              loop={true}
              />
        </div>
    )
}

export default VideoPlayer;