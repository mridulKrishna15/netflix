import "./navbar.scss"
import img from "../../images/logo2.png"
import profile from "../../images/profile.jpg"
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useState } from "react"
const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false);
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0?false:true)
        return ()=>(window.onscroll=null);
    }
  return (
    <div className={isScrolled?"navbar scrolled" :"navbar"}>
        <div className="container">
            <div className="left">
                <img src={img} alt="" />
                <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and popular</span>
            <span>Mylist</span>
            </div>
            <div className="right">
                <Search  className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src={profile} alt="" />
                <div className="profile">
                <ArrowDropDown className="icon"/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
                </div>
               
            </div>
          
           
        </div>
    </div>
  )
}

export default Navbar
