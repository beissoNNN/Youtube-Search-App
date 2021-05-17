import React from 'react';

const VideoDetail = (props) => {
    if (!props.video) {
        return <div> Cargando... </div>
    }
    
    return (
        <div>
            <div className="title">{ props.video.snippet.title }</div>
            <div className="media">
                <div className="media-left ">
                    <img className="media-object " src={ props.video.snippet.thumbnails.high.url } />    
                </div>
                <div className="media-body   ">
                    <div className="media-heading list-group-item">{ props.video.snippet.description }</div>
                </div>
            </div>
        </div>       
    );
};

export default VideoDetail;