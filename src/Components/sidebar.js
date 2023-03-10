import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from "react-router-dom";
const Sidebar = ({active}) => {

    const navigate = useNavigate()
   
    return (
        <div className="left-con" >
            <div className="active-div" onClick={() => {navigate("/home" )}} >
                <h3  >Profile</h3>
                <div>

                </div>
                <div className={active === "profile" ? "active" : "click"}  >
                    <span></span>
                    <ChevronRightIcon /></div>
            </div>
            <div className="white-line" ></div>
            <div className="active-div" onClick={() => {navigate("/posts")}} >

                <h3  >Posts</h3>
                <div className={active === "posts" ? "active" : "click"}   >
                <span></span><ChevronRightIcon /></div>
            </div>
            <div className="white-line" ></div>
           
            <div className="active-div" onClick={() => {navigate("/gallery")}} >
                <h3 >Gallery</h3>
                <div className={active === "gallery" ? "active" : "click"}  >
                <span></span><ChevronRightIcon /></div>
            </div>
            <div className="white-line" ></div>
            <div className="active-div" onClick={() => {navigate("/todo")}} >
                <h3 >ToDo</h3>
                <div className={active === "todo" ? "active" : "click"}>
                <span></span><ChevronRightIcon /></div>
            </div>

        </div>
    )
}

export default Sidebar