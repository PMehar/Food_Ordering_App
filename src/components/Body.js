import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = ()=>{

    const [listOfRestaurants , setListOfRestaurants] = useState(resList)

    return(
        <div className ="body">
            {/* <div className="search">Search</div> */}

            <div className="filter">
                
                <button className="filter-btn" onClick={()=>{
                    // filter logic here..
                    const filteredList = listOfRestaurants.filter((res)=>
                        res.info.avgRating>4.1
                    );
                    setListOfRestaurants(filteredList);
                    console.log(listOfRestaurants);
                }}>Top Rated Restaurants</button>
               
            </div>

            <div className="res_Container">
                {/* restaurant cards */}
               {listOfRestaurants.map((restaurant)=>(
                <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
               ))}  
               
            </div>
        </div>
    )
}

export default Body;