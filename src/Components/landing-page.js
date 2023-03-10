import React, { useEffect, useState} from "react";
import "./Styles/landing-page.css"
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

    const [data, setData] = useState([])
    const [user,setUser] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        
        setUser("")
        fetch("https://panorbit.in/api/users.json")
            .then(res => res.json())
            .then(data => setData(data.users))
    }, [])

    const handleSelect = (i) =>{
        if(i) {
            localStorage.removeItem("data")
            setUser(data[i-1])
        }
           
    }

    useEffect(() => {
        if(user !== ""){
            localStorage.setItem("data" , JSON.stringify(user))
            navigate("/home")
        }
    },[user])

    return (
        <div className="landingpage-con" >
            <div className="card-con" >
                <div className="select-div" >
                    <h2>Select an account</h2>
                </div>
                <div className="all-content" >
                    {data?.map((data, index) => {
                        return (
                            <div key={index} >
                                <div  className="single-content" onClick={()=>handleSelect(data.id)} >
                                    <img src={data.profilepicture} alt={data.name} className="profile" />
                                    <h4 className="name" >   {data.name}</h4>
                                </div>
                               <hr className="line" />
                            </div>
                        )

                    })}
                </div>
            </div>
        </div>
    )
}

export default LandingPage