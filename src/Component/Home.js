import Card from "./Card"
import details from "../utils/details"
import laptopservice from '../assets/laptopservice.png'
import serverservice from '../assets/serverservice.png'
import cloudservice from '../assets/cloudservice.png'
import forwardarrow from '../assets/forwardarrow.png'
import backwardarrow from '../assets/backwardarrow.png'
import { useState } from "react"
import { useHistory } from "react-router"
const Home =()=>{
    const {data} = details || {};
    const {client} =data || []; 
    const {server} =data || []; 
    const {cloud} =data || []; 
    let history = useHistory();

    const [volatile, setVolatile] = useState({
        cardName: '',
        isActiveCard : false,
        priviousName : '',
        isButtondisabled : true,
    })
    const handleCardClick = (name) => {
        let cardName = volatile?.cardName;
        cardName = name;
        let priviousName = volatile?.priviousName;
        let isActiveCard = volatile?.isActiveCard;
        if(priviousName === name){
            isActiveCard = !isActiveCard
        }
        else{
            isActiveCard = true;
        }
        priviousName = name;
        setVolatile((state)=>({
            ...state,
            cardName,
            isActiveCard,
            priviousName,
        }))
    }
    return(
        <div>
            <div className="container">
                <div className="heading">
                    <h4 style={{fontWeight:"400",fontSize:"larger"}}>Technologies i want to use.</h4>
                </div>
                <div className="cardcontainer">
                    <div className="clientside">
                        <div style={{display:"flex",margin:"17.733px 0px",justifyContent:"space-between",width:"85px"}}>
                            <img src={laptopservice} alt="...loading" style={{width:"20px"}} />   
                            <label style={{fontWeight:"300",fontSize:"smaller"}}>Client Side</label>  
                        </div>
                        <div className="clientsidecard">
                            {
                                client?.map((element)=>{
                                    return <div key={element?.name}>
                                                <Card
                                                    image={element?.img}
                                                    name={element?.name}
                                                    details={element?.details}
                                                    handleCardClick={()=>handleCardClick(element?.name)}
                                                    cardName = {volatile?.cardName}
                                                    isActiveCard = {volatile?.isActiveCard}
                                                />
                                            </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="mixservice">
                        <div className="serverside">
                            <div style={{display:"flex",margin:"17.733px 0px",justifyContent:"space-between",width:"90px"}}>
                                <img src={serverservice} alt="...loading" style={{width:"20px"}} />   
                                <label style={{fontWeight:"300",fontSize:"smaller"}}>Server Side</label>  
                            </div>
                            <div className="serversidecard">
                                {
                                    server?.map((element) =>{
                                        return <div key={element?.name}>
                                            <Card
                                                image={element?.img}
                                                name={element?.name}
                                                details={element?.details}
                                                handleCardClick={()=>handleCardClick(element?.name)}
                                                cardName = {volatile?.cardName}
                                                isActiveCard = {volatile?.isActiveCard}
                                            />  
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        <div className="cloudservice">
                            <div style={{display:"flex",margin:"17.733px 0px",justifyContent:"space-between",width:"110px"}}>
                                <img src={cloudservice} alt="...loading" style={{width:"20px"}} />   
                                <label style={{fontWeight:"300",fontSize:"smaller"}}>Cloud Services</label>  
                            </div>
                            <div className="cloudservicecard">
                                {
                                    cloud?.map((element) =>{
                                        return <div key={element?.name}>
                                            <Card
                                                image={element?.img}
                                                name={element?.name}
                                                details={element?.details}
                                                handleCardClick={()=>handleCardClick(element?.name)}
                                                cardName = {volatile?.cardName}
                                                isActiveCard = {volatile?.isActiveCard}
                                            />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div style={{display:"flex",justifyContent:"space-between",width:"103px",alignItems:"flex-end",cursor:'pointer'}}>
                        <img src={backwardarrow} alt="...loading" style={{width:"20px"}} />   
                        <span style={{fontWeight:"300",fontSize:"medium"}}>Our services</span>  
                    </div>
                    <div title={(!volatile?.isActiveCard && 'Please select skill') || ''} style={{display:"flex",justifyContent:"space-between",width:"201px",alignItems:"flex-end",cursor:'pointer'}}
                        onClick={()=>{volatile?.isActiveCard && history.push({data:volatile?.cardName,pathname:"/calendar"});}}
                    >
                        <span style={{fontWeight:"300",fontSize:"medium"}}>Expected Completion Time</span>
                        <img src={forwardarrow} alt="...loading" style={{width:"20px"}} />   
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;