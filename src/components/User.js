import { useState, useEffect } from "react";

const User = ({name}) =>{
   useEffect(()=>{
    const timer = setInterval(()=>{
        console.log("NAMASTE REACT OP");
    }, 1000);

    console.log("UseEffect called");

    return()=>{
        clearInterval(timer);
        console.log("UseEffect Return called")
    };
   }, []);

   console.log("Render called");
    
   
    return(
        <div className="user-card">
            <h2>Name : {name}</h2>
            <h3>Location : Dehradun</h3>
            <h4>Contact : @puja05</h4>
        </div>
    );

};
export default User;