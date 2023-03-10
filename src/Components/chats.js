import React ,{useState,useEffect} from "react";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Chats = ({name}) => {

    const [active, setActive] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://panorbit.in/api/users.json")
            .then(res => res.json())
            .then(data => setData(data.users))
    }, [])

    
    return(
        <div className={`dropup-menu ${active ? "open" : ""} `} >
                            <div className="chats" >
                                <div className="chat" >
                                    <ChatBubbleOutlineIcon />
                                    <h3>Chats</h3>
                                </div >
                                {
                                   
                                    active ? (
                                        <ArrowDropDownIcon className="open" onClick={() => {
                                            setActive(false)
                                        }} />
                                    ) :
                                        (
                                            <ArrowDropUpIcon className="open" onClick={() => {
                                                setActive(true)
                                            }} />
                                        )
                                }

                            </div>
                            <div className={`dropup-menu-content`} >
                                {
                                    data.map((data, index) => {
                                        return (
                                            <div key={index} >
                                                {data?.name !== name ? (
                                                    <div className="pro-name" >
                                                        <img src={data?.profilepicture} alt="profile" className="profile" />
                                                        <h5 className="name" >{data?.name}</h5>
                                                    </div>
                                                ) : null}
                                            </div>
                                        )
                                    })
                                }
                            </div>

                          
                        </div>
    )
}

export default Chats