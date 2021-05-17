import React from 'react';
import YouTube from 'react-youtube';

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props); //TODO: y esto?
    }

    _onEnd() {
        this.props.onCounterChange();
    }  

    render() {
        if (!this.props.video) {
            return <div> Cargando... </div>
        }

        const opts = {
          height: '390',
          width: '640',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
          },
        };

        const videoId = this.props.video.id.videoId;
        const videoTitle = this.props.video.snippet.title 
        
        return (
            <div>
                <div className="video-detail">
                    <div className="embed-responsive embed-responsive-16by9">
                        <YouTube videoId={videoId} opts={opts} onEnd={this._onEnd.bind(this)}/>  
                    </div>
                    <div className="title details">
                        <div>{ videoTitle }</div>    
                    </div>    
                </div> 
            </div> 
        );
    }   
}

export default VideoPlayer;