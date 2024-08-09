import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData})=>{
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo} = resData?.info;
    const{deliveryTime}= resData?.info?.sla;

    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <div className="img_container">
                <img className="img_1" alt="restaurant logo" src={CDN_URL + cloudinaryImageId}/>  
            </div>
           
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} Stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}

export default RestaurantCard;