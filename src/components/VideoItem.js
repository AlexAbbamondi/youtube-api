import React from "react";
import "./VideoItem.css";

function VideoItem({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)} clasName="video-item item">
      <img
        className="ui image video-image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content video-text">
        <div className="header">{video.snippet.title}</div>
      </div>
      <hr />
    </div>
  );
}

export default VideoItem;
