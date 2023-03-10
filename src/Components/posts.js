import React ,{useState,useEffect}from "react";
import Sidebar from "./sidebar";
import "./Styles/post.css"
import Chats from "./chats";
const Posts = () => {
    const [data,setData] = useState({})
    useEffect(() => {
      (setData(JSON.parse(localStorage.getItem("data"))))
 
    },[])

    return (
        <div className="homePage-con" >
            <Sidebar active={"posts"} />
            
                <div className="right-con" >
                    <div className="header"  >
                        <h2 className="profile" >Posts</h2>
                        <div className="profilename" >
                            <img className="profile" alt="profile" src={data.profilepicture} />
                            <p className="name" >{data.name}</p>
                        </div>
                    </div>
                    <div className="line2" ></div>
                    <div className="soon" >
                        Coming Soon
                    </div>
                    <div className="chats-div" >
                    <Chats name={data.name} />
                    </div>
                  

                </div>
        
        </div>
    )
}

export default Posts