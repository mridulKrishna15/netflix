import "./listitem.scss"
import {Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined} from "@material-ui/icons"
import img from "../../images/movie1.jpg"
import trailer from "../../videos/trailer.mp4"
import { useState } from "react"
export default function ListItem({index}) {
  const [isHovered,setIsHovered]=useState(false);
  return (
    <div className="listItem"
    
    onMouseEnter={()=>setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    
    
   >
      
      {!isHovered && (
 <img src={img} alt="" />
      )}
     
      {isHovered && (
        <>
           
           <div className="itemInfo">
           <video src={trailer} autoPlay={true} loop></video>
              <div className="icons">
               <PlayArrow className="icon"/>
               <Add className="icon"/>
               <ThumbUpAltOutlined className="icon"/>
               <ThumbDownAltOutlined className="icon"/>
              </div>
              <div className="itemInfoTop">
               <span>1 hour 14 mins</span>
               <span className="limit">+16</span>
               <span>1999</span>
              </div>
              <div className="desc">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam omnis nobis eos quisquam, autem sapiente? Aut, nobis. Assumenda, libero illo!
              </div>
              <div className="genre">Sci-fi</div>
      
     
      </div></>
      )}
    </div>
  )
}
