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

        console.log("Constructor called");
    }
    async componentDidMount(){
        console.log("componentDidMount called");
      //API call
      const data = await fetch("https://api.github.com/users/akshaymarch7")
      const json = await data.json();

      this.setState({
        UserInfo:json,
      })

      console.log(json);

    }

    componentDidUpdate(){
        console.log("componentDidUpdate called")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount called")
    }

    render(){
        const{name, location, avatar_url } = this.state.UserInfo;
        console.log("render called");
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