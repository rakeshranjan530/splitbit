const Card =({image,name,details, handleCardClick,cardName,isActiveCard})=>{
    return(
        <div className={`card ${(cardName === name && isActiveCard) ? 'activeCard' : ''}`} onClick={handleCardClick} name={name}>
            <div className="cardimage">
                <img src={image} 
                    alt="loading..." style={{width:"100%",height:"70px"}}>
                </img>
            </div>
            <div className="carddetails">
                <label>{name}</label>
                <label style={{fontSize:"smaller"}}>{details}</label>
            </div>
        </div>
    )
}
export default Card;