import React from 'react'
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote'

function VideoFooter({ name, description, music }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h4>@{ name }</h4>
        <p>{ description }</p>
        <div className="videoFooter__music">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>{ music }</p>
          </div>
        </div>
      </div>
      <img 
        className="videoFooter__record" 
        alt="Imagem de um vinil girando"
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png"
      />
    </div>
  )
}

export default VideoFooter