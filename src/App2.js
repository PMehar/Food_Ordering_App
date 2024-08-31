import React from "react";
import reactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";




const AppLayout = ()=>{
    return(
        <div className="app">
            {/* //header
            //body
            //footer */}
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path :"/",
        element :<AppLayout/>, 
        children : [
            {
                path :"/",
                element :<Body/>, 
            },
            {
                path :"/about",
                element :<About/>, 
            },
            {
                path :"/contact",
                element :<ContactUs/>, 
            },
            {
                path :"/restaurants/:resId",
                element :<RestaurantMenu/>, 
            },
            
            
        ],
        errorElement : <Error/>
    },
   

]);

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);