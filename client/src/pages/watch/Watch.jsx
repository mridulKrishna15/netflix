import React from 'react'
import "./watch.scss"
import { ArrowBackOutlined } from '@material-ui/icons'
import film from "../../videos/film.mp4"
export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video src={film} className="video" autoPlay progress controls></video>
      
    </div>
  )
}
