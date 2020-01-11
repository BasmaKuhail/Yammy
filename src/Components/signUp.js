import React, {Component} from 'react';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';
import './signUp.css';

class SignUp extends Component{

    state={
        email:"",
        username:"",
        password:"",
        chief_checked:false,
        user_checked:false,

    }

    componentDidMount(){
        const db = firebase.firestore();

        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().first}`);
            });
        });

    }
    
    addUser = ()=>{

        const{email, username, type, password}= this.state; 

        const db = firebase.firestore();
        
        console.log(email,password ,"email,password")
        
        firebase.auth().createUserWithEmailAndPassword(email,password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        }).then(function(){
        db.collection("users").add({
            Email:email,
            Username:username,
            userType: type


        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        })


    }
    handleChange = ( e)=>{

        let key = e.target.name;

        this.setState({
            [key]:e.target.value
        })

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
                    
                    <input className="input" type="text" name="email" placeholder ="Enter your email"  defaultValue={this.state.email} onChange={this.handleChange}/>
                    </div>           
                 
                    <div className="form-group">
                    {/* <label  htmlFor="username">
                        Username
                    </label> */}
                    
                    <input className="input" type="text" name= "username" placeholder ="Enter your username" defaultValue={this.state.username} onChange={this.handleChange}/>
                    </div>

                    

                    <div className="form-group">
                    {/* <label>
                        Password
                    </label> */}
                    
                    <input className="input" type="password" name= "password" placeholder ="Enter your password" defaultValue={this.state.password} onChange={this.handleChange}/>
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
                    <Link className="linkAsBtn" to="./loggedPage" onClick={this.addUser}>Sign up</Link>
                    </div>
                    
                    <br/>

                    <div className="form-group">
                    <Link className="linkAsBtn" to="./Login">I already have an account. Log in</Link>
                    </div>

                </div>

      </div>

    )
}
}

export default SignUp;