import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = ()=>{
    return(
        <div className ="body">
            <div className="search">Search</div>
            <div className="res_Container">
                {/* restaurant cards */}
               {resList.map((restaurant)=>(
                <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
               ))}  
               
            </div>
        </div>
    )
}

export default Body;