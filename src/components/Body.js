import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = ()=>{

    const [listOfRestaurants , setListOfRestaurants] = useState(resList);
    const[filteredRestaurant, setFilteredRestaurant] = useState(resList);

    const [searchText, setSearchText] = useState("");
    // Whenever state variable update, react triggers a reconcilliation cycle(re-renders the component)

    
    console.log("body rendered");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.0748&lng=72.8856");

        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);

    };

    // Conditional Rendering
    // if(listOfRestaurants.length===0){
    //     return <Shimmer/>
    // }

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className ="body">
            {/* <div className="search">Search</div> */}

            <div className="filter">
                <div className="search">
                    <input type = "text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/> 
                     {/* the value is tied to searchText onchange it will update searchtext by setSearchText (updates local state variable and re-renders the component)  on each keypress*/}
                    <button onClick={()=>{
                        // filter the restaurant cards and update the ui
                        //console.log(searchText)

                        const filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                
                <button className="filter-btn" onClick={()=>{
                    // filter logic here..
                    const filteredList = listOfRestaurants.filter((res)=>
                        res.info.avgRating>4.1
                    );
                    setFilteredRestaurant(filteredList);
                    console.log(listOfRestaurants);
                }}>Top Rated Restaurants</button>
               
            </div>

            <div className="res_Container">
                {/* restaurant cards */}
               {filteredRestaurant.map((restaurant)=>(
                <Link key={restaurant?.info?.id} to={"/restaurants/"+ restaurant?.info?.id}><RestaurantCard  resData={restaurant}/></Link>
               ))}  
               
            </div>
        </div>
    )
}

export default Body;