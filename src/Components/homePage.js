import React, { useEffect, useState} from "react";
import "./Styles/homePage.css";
import Chats from "./chats";
import Sidebar from "./sidebar";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()
    const [data,setData] = useState({})

    
    useEffect(() => {
      setData(JSON.parse(localStorage.getItem("data")))
    },[])

   
    return (
        <div className="homePage-con" >
            <Sidebar active="profile"  />
            <div className="right-con" >
                <div className="header" >
                    <h2 className="profile" >Profile</h2>
                    <div className="profilename" >
                        <div className="pro-div" >
                        <img className="profile" alt="profile" src={data.profilepicture} />
                        <p className="name" >{data.name}</p>
                        </div>
                       
                        <div className="logout" 
                        onClick={() => {
                            localStorage.removeItem("data")
                            navigate("/")
                        }} >
                            Logout
                        <LogoutIcon/>
                        </div>
                   
                    </div>

                </div>
                <div className="line2" ></div>
                <div className="second-con" >
                    <div className="pro-details" >
                        <img src={data.profilepicture} alt="profile" className="largepic" />
                        <h2>{data.name}</h2>
                        <div>
                            <h4><span>Username:</span>{data?.username}</h4>
                            <h4><span>e-mail:</span>{data?.email}</h4>
                            <h4><span>Phone:</span>{data?.phone}</h4>
                            <h4><span>Website:</span>{data?.website}</h4>
                            <hr />
                            <h4><span>Company</span></h4>
                       
                            <h4><span>Name:</span>{data?.company?.name}</h4>
                            <h4><span>catchphrase:</span>{data?.company?.catchPhrase}</h4>
                            <h4><span>bs:</span>{data?.company?.bs}</h4>
                        </div>
                    </div>

                    <div className="address-div" >
                        <h4><span>Address:</span></h4>
                        <div className="div" >
                            <h4><span>Street:</span>{data?.address?.street}</h4>
                            <h4><span>Suite:</span>{data?.address?.suite}</h4>
                            <h4><span>City:</span>{data?.address?.city}</h4>
                            <h4><span>Zipcode:</span>{data?.address?.zipcode}</h4>
                        </div>
                        <div>
                            <img src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="map" width="550px" height="350px" />
                            <div className="map" >
                                <p><span>Lat:</span>{data?.address?.geo?.lat}</p>
                                <p><span>Lng:</span>{data?.address?.geo?.lng}</p>
                            </div>
                        </div>
                        <div className="chats-div" >
                        <Chats name={data.name} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage