import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component{
  constructor(props){
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent ComponentDidMount");
  }
   
  render(){
    console.log("Parent render")
    return (
      <div> 
        <h1>About Page</h1> 
        <UserClass name = {"first"}/>
        <UserClass name = {"seconds"}/>
      </div>
      
    );
    
  }
}

export default About;