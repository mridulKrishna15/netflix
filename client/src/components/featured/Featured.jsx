import React from 'react'
import "./featured.scss"
import background from "../../images/background.jpg"
import movie from "../../images/featuredMovie.png"
import { InfoOutlined, PlayArrow } from '@material-ui/icons'
export default function Featured({type}) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type==="movie"?"Movies": "Series"}</span>
          <select name="genre" id="genre">
            <option >Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img width="100%"  src={background} alt="" />
      <div className="info">
         <img src={movie} alt="" />
         <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ex incidunt. Alias, incidunt odit voluptate sapiente ipsa ad, consectetur natus eveniet hic non libero? Esse molestias, exercitationem delectus nulla rem iusto, nostrum eligendi maxime aspernatur modi, consequuntur nesciunt aperiam fugit. Reprehenderit officia blanditiis error cupiditate, commodi temporibus voluptas quasi nisi voluptates, veritatis suscipit nemo provident modi quo harum laboriosam voluptatem ipsa eaque numquam natus ipsam. Porro labore nesciunt aliquid odio molestiae quam illum inventore, tempora ipsum adipisci eum deserunt aliquam, necessitatibus ad ipsam rem earum, laborum accusamus repellendus aut impedit quas ab iste! Nobis unde aspernatur impedit, incidunt veritatis quaerat!
         </span>
         <div className="buttons">
            <button className="play">
               <PlayArrow/>
               <span>Play</span>
            </button>
            <button className="more">
               <InfoOutlined/>
               <span>Info</span>
            </button>
         </div>
      </div>
    </div>
  )
}
