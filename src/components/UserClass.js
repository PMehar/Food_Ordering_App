import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            UserInfo: {
                name : "Dummy", 
                location: "Default",
            },
        };  

        // console.log("Constructor called");
    }
    async componentDidMount(){
      
        this.timer = setInterval(()=>{
            console.log("NAMASTE REACT OP")
        }, 1000);

        // console.log("componentDidMount called");
    }

    componentDidUpdate(){
        // console.log("componentDidUpdate called")
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        // console.log("componentWillUnmount called")
    }

    render(){
        const{name, location, avatar_url } = this.state.UserInfo;
        // console.log("render called");
        return(
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name : {name}</h2>
                <h3>Location :{location}</h3>
                <h4>Contact : @puja05</h4>
            </div>
        );
    }
}
export default UserClass;