import React, {Component} from 'react';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';


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

        const{email, username, type, }= this.state; 

        const db = firebase.firestore();

        firebase.auth().createUserWithEmailAndPassword(this.state.email,
            this.state.password).catch(function (error) {
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
        <div style={{textAlign:"center"}}>

                    <h1>Sign Up</h1>

                    <label>
                        Email
                    </label>
                    <input type="text" name="email" placeholder ="Enter your email"  defaultValue={this.state.email} onChange={this.handleChange}/>
                    
                    <br/>
                    
                    <label>
                        Username
                    </label>
                    <input type="text" name= "username" placeholder ="Enter your username" defaultValue={this.state.username} onChange={this.handleChange}/>

                    <br/>
                    
                    <label>
                        Password
                    </label>
                    <input type="password" name= "password" placeholder ="Enter your password" defaultValue={this.state.password} onChange={this.handleChange}/>
                    
                    <br/>

                    <label>
                        <input type="radio" name="type" defaultValue="option1" value="user" onChange={this.handleChange} />
                        I am normal user
                    </label>

                    <label>
                        <input type="radio" name="type" defaultValue="option1"  value="cheif" onChange={this.handleChange} />
                        I am a chief
                    </label>
                    <br/>
                    <Link to="./loggedPage" onClick={this.addUser}>Sign up</Link>
                    <br/>
                    <Link to="./Login">I already have an account. Log in</Link>



      </div>

    )
}
}

export default SignUp;