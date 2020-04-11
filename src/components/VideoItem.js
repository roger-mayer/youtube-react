import React from "react";

const VideoItem = ({ video }) =>{
    return <div className="item">
        <img src={video.snippet.thumbnails.medium.url} alt=""/>
        {video.snippet.title}
    </div>
};

export default VideoItem;