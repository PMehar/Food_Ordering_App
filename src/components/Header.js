import {LOGO_URL} from "../utils/constants";
const Header = ()=>{
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
                </ul>
            </div>
        </div>
    )
}

export default Header ;