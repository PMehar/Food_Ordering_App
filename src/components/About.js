import React from 'react';
import User from './User';
import UserClass from './UserClass';

class About extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    
  }
   
  render(){
    
    return (
      <div> 
        <h1>About Page</h1> 
        <UserClass name = {"first"}/>
        {/* <User name = {"second]"}/> */}
      </div>
      
    ); 
  }
}
export default About;