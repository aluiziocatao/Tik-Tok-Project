import React, { useState } from 'react';
import HeartBorderIcon from '@mui/icons-material/FavoriteBorder';
import HeartIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';

import "./VideoSidebar.css";

function VideoSidebar({ likes, messages, shares}) {

  const [liked, setLiked] = useState(false);

  function handdleLike(){
    setLiked(!liked);
  }

  return (
    <div className="videoSidedebar">
      <div 
        className="videoSidebar__options"
        onClick={handdleLike}
      >
        { 
          liked ? <HeartBorderIcon fontSize="large" /> 
                : <HeartIcon fontSize="large" /> 
        }        
        <p>{ liked ? likes + 1 : likes }</p>          
      </div>
      <div className="videoSidebar__options">
        <ChatIcon fontSize="large" />   
        <p>{ messages }</p> 
      </div>
      <div className="videoSidebar__options">
        <ShareIcon fontSize="large" />
        <p>{ shares }</p> 
      </div>
    </div>
  )
}

export default VideoSidebar