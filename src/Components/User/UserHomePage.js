import React  ,{Component}from 'react';
import './UserHomePage.css';
import * as firebase from 'firebase';
import Cards from '../Card/Card.js';
import UserLayOut from '../userLayOut'
import user from '../user.svg';


class User extends Component{

    logout=()=>{
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    };

    eattimeMeals=(name)=>{
      console.log(name);
      this.props.history.push('/eatTime', {id: name})

    }

    occasion=(name)=>{
      console.log(name);
      this.props.history.push('/occasion', {id: name})

    }

    type=(name)=>{
      console.log(name);
      this.props.history.push('/type', {id: name})

    }

    vegan=()=>{
      this.props.history.push('/vegan')

    }
    
    render(){

    return (
      <div>
            <div>
            <UserLayOut {...this.props}/>
            </div>
    

    <div className='card-user'>
      <div style={{marginTop:80}}>
    <h2 style={{color:"rgb(245, 80, 3)", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", fontSize:34}}>All meals</h2>
    </div>
        <Cards {...this.props}/>
    </div>

<div/>

</div>
   


        )
    }
}



export default User;
