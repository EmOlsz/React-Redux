import React from 'react';

const VideoDetails = (props) => {
    if (!props.videos) {
        return <h1>Loading...</h1>;
    }
    const id = props.videos.id.videoId;
    const url = `https://www.youtube.com/embed/${id}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <h1>{props.videos.snippet.title}</h1>
                <p>{props.videos.snippet.description}</p>
            </div>
        </div>
    )
};

export default VideoDetails;