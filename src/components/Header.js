import {LOGO_URL} from "../utils/constants";
import { useState } from "react";

// const btnName =  [login, setLogin] = useState("");

const Header = ()=>{
    // let btnName = "Login";
    const[btnName , setBtnName] = useState("LogIn");
    return(
        <div className= "header">
            <div className="logo_container">
                <img className="logo" alt=" App logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                    <li>CART</li>
                    <button className="login" onClick={()=>{btnName==="LogIn" ? setBtnName("LogOut"): setBtnName("LogIn"); console.log(btnName);}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header ;