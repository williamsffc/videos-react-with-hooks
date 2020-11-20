import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const snippets = video.snippet;

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={snippets.thumbnails.medium.url}
        alt={snippets.title}
      />
      <div className="content">
        <div className="header">{snippets.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
