import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

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
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT US</Link></li>
                    <li><Link to="/cart">CART</Link></li>
                    <button className="login" onClick={()=>{btnName==="LogIn" ? setBtnName("LogOut"): setBtnName("LogIn"); console.log(btnName);}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header ;