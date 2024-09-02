import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        };
    }

    render(){
        const{count, count2} = this.state;
        const{name } = this.props;
        return(
            <div className="user-card">
                <h1>Count : {count}</h1>
            
                <button onClick={()=>{
                    // Never Update State Variable directly
                    this.setState({
                        count: this.state.count+1,
                    });
                    }}>Count Increase
                </button>

                <h1>Count2 : {count2}</h1>
                <h2>Name : {name}</h2>
                <h3>Location : Dehradun</h3>
                <h4>Contact : @puja05</h4>
            </div>
        );
    }
}

export default UserClass;