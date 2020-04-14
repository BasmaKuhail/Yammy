import React, {Component} from 'react';
import * as firebase from 'firebase';
import './signUpLogIn.css';

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
                        this.props.history.push('/cheif')

                    }else{
                        this.props.history.push('/user')
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
        this.props.history.push('/Login');
        console.log("hello")
    }


    render(){
        return(
            <div  className="base-container">
                <img
                    src={'https://images.pexels.com/photos/1431305/pexels-photo-1431305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
                    style={{width:1365, height:668,opacity:0.9}}
                />

<div style={{position:"absolute",borderRadius:25,right:480, background:" rgba(0, 0, 0, 0.6)",alignItems:"center",padding:20, top:45,textAlign:"center"}}>
                            
<h1 style={{fontSize:40,
                                color:"#FBFF00", 
                                }}>Sign Up</h1>

                    <p style={{fontSize:19, fontWeight:"bold", color:"#ffffff"}}>Please fill this form to create an account</p>


                    <div className="form-group">
                        
                    <input 
                            className="input1" 
                            type="text" 
                            name="email" 
                            placeholder ="  E-mail"  
                            defaultValue={this.state.email} 
                            onChange={this.handleChange}
                            style={{width:340,
                                padding: 8.5,
                                margin:10,
                                border: "none",
                                opacity: 0.9,
                                borderRadius: 2,
                                background: "white",
                                height: 30,}}
                        />
                    </div>           
                    
                    <div className="form-group">
                    <input 
                        className="input1" 
                        type="text" 
                        name= "username" 
                        placeholder ="  Username" 
                        defaultValue={this.state.username} 
                        onChange={this.handleChange}
                        style={{width:340,
                            padding: 8.5,
                            margin:10,
                            border: "none",
                            opacity: 0.9,
                            borderRadius: 2,
                            background: "white",
                            height: 30,}}
                        />
                    </div>

                    <div className="form-group">
                    <input 
                        className="input1" 
                        type="password" 
                        name= "password" 
                        placeholder ="  Password" 
                        defaultValue={this.state.password} 
                        onChange={this.handleChange}
                        style={{width:340,
                            padding: 8.5,
                            marginTop:10,
                            marginBottom:20,
                            border: "none",
                            opacity: 0.9,
                            borderRadius: 2,
                            background: "white",
                            height: 30,}}
                        />
                    </div>

                    <div className="form-group">
                    <text style={{fontSize:19,marginRight:30,fontWeight:"bold", color:"#ffffff"}}>Sign up as:</text>
                        <text style={{fontSize:20, marginRight:30,color:"#F0C308"}}>
                            <input 
                                type="radio" 
                                name="type" 
                                defaultValue="option1" 
                                value="user" 
                                onChange={this.handleChange} 
                            />
                            user
                        </text>  

                        <text style={{fontSize:20,color:"#FBFF00"}}>
                            <input 
                                type="radio" 
                                name="type" 
                                defaultValue="option1"  
                                value="cheif" 
                                onChange={this.handleChange} 
                            />
                            chief
                        </text> 
                        <div className="form-group">
                        <button style={{backgroundColor: "#FBFF00",
                                            borderRadius: 10,
                                            padding: 9,
                                            marginTop:20,
                                            marginBottom:10,
                                            border: "none",
                                            width: 200,
                                            opacity: 0.9,
                                            fontSize: 20,
                                            fontWeight:"bold"}} onClick={this.addUser}>Sign up</button>
                            </div> 
                       <p style={{fontSize:19,fontWeight:"bold", color:"#ffffff"}}>Do you already have account?</p>

                        <div className="form-group">
                        <button style={{backgroundColor: "#FBFF00",
                                            borderRadius: 10,
                                            padding: 9,
                                            marginTop:3,
                                            border: "none",
                                            width: 200,
                                            opacity: 0.9,
                                            fontSize: 20,
                                            fontWeight:"bold"}} onClick={this.gotoLoginPage}>Login</button>                        </div>
                        </div>


                   

            </div>

        </div>

        )
    }
}

export default SignUp;
