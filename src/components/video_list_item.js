import React from 'react';

const VideoListItem = (props) => {
    const video_imageURL = props.video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item" onClick={() => props.onVideoSelect(props.video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={video_imageURL} />    
                </div>

                <div className="media-body">
                    <div className="media-heading">{props.video.snippet.title}</div>
                </div>
            </div>
        </li>
    ) 
};

export default VideoListItem;