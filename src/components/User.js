import { useState, useEffect } from "react";

const User = ({name}) =>{
   useEffect(()=>{
    fetchData();
   }, [])
    
   const fetchData = async()=>{
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    console.log(json);
   }
   
    return(
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>Location : Dehradun</h3>
            <h4>Contact : @puja05</h4>
        </div>
    );

};
export default User;