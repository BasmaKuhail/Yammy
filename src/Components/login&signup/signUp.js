import React, {Component} from 'react';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';
import './style.css';

class SignUp extends Component{

    state={
        email:"",
        username:"",
        password:"",
        chief_checked:false,
        user_checked:false,

    }

    
    addUser = ()=>{

        const{email, username, type, password}= this.state; 

        const db = firebase.firestore();
        
        console.log(email,password ,"email,password")
        
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            let user  =  firebase.auth().currentUser
            db.collection("users").doc(user.uid).set({
                Email:email,
                Username:username,
                userType: type
    
    
            })
                .then( (docRef) =>{
                    if(type =='cheif'){
                        (this.props.history.push('/cheif'))

                    }else{
                        (this.props.history.push('/user'))
                    }
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
            })
    .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error)
            alert(errorCode)
            // ...
        })

    }
    handleChange = ( e)=>{

        let key = e.target.name;

        this.setState({
            [key]:e.target.value
        })

    }


    gotoLoginPage=()=>{
        this.props.history.push('/Login')
    }


render(){
    return(
        <div  className="base-container">

            <img className='bigimg' 
                src={'https://backgrounddownload.com/wp-content/uploads/2018/09/background-for-food-website-3.jpg'}/>

                    <div className="centered">
                        
                    <h1 className="header">Sign Up</h1>
                    <br/>

                    <div className="form-group">
                    {/* <label>
                        Email
                    </label> */}
                    
                    <input className="input1" type="text" name="email" placeholder ="  Enter your email"  defaultValue={this.state.email} onChange={this.handleChange}/>
                    </div>           
                 
                    <div className="form-group">
                    {/* <label  htmlFor="username">
                        Username
                    </label> */}
                    
                    <input className="input1" type="text" name= "username" placeholder ="  Enter your username" defaultValue={this.state.username} onChange={this.handleChange}/>
                    </div>

                    

                    <div className="form-group">
                    {/* <label>
                        Password
                    </label> */}
                    
                    <input className="input1" type="password" name= "password" placeholder ="  Enter your password" defaultValue={this.state.password} onChange={this.handleChange}/>
                    </div>

                    <br/>
                    
                    <div className="form-group">
                    <label className="label">
                        <input  type="radio" name="type" defaultValue="option1"  value="user" onChange={this.handleChange}  />
                        I am normal user
                    </label>                 
                    <label className="label">
                        <input  type="radio" name="type" defaultValue="option1" value="cheif" onChange={this.handleChange} />
                        I am a chief
                    </label>
                    </div>


                    <br/>
                       <div className="form-group">
                    <button className="yellowButton" onClick={this.addUser}>Sign up</button>
                    </div> 
                    
                    <br/>

                    <div className="form-group">
                    <button className="yellowButton" onClick={this.gotoLoginPage}>I already have an account. Log in</button>
                    </div>

                </div>

      </div>

    )
}
}

export default SignUp;