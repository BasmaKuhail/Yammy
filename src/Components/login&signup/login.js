import React, {Component, useContext} from 'react';
import { Redirect } from "react-router";
import * as firebase from 'firebase';
import { AuthContext } from "../../Auth";
 


class Login extends Component{

    state={

        loggedType:"",

    }

    static contextType = AuthContext;

    handleChange = ( e)=>{

        let key = e.target.name;
        this.setState({
            [key]:e.target.value
        })

    };

    gotSignUpPage=()=>{
        this.props.history.push('/SignUp')
    }
    

    signin = ()=>{
        console.log( this.state.email,
            this.state.password,)
        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.password,
            ).then((res)=>{
                console.log(res.user.uid);
                
                const db= firebase.firestore();
                db.collection("users").where("Email", "==",this.state.email)
                .get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach((doc)=> {
                        // doc.data() is never undefined for query doc snapshots
                        console.log(doc.id, " => ", doc.data());
                        console.log(doc.data().userType);
                        this.setState({loggedType:doc.data().userType});
                });
        
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                })

                .then( (docRef) =>{
                    if(this.state.loggedType=='cheif'){
                        (this.props.history.push('/cheif'))

                    }else{
                        (this.props.history.push('/user'))
                    }
                })

              

                
            }).catch( (error)=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error)
            alert(errorCode)
            // ...
        })
    };



    render(){
        const { currentUser } = this.context
        if (currentUser) {


            console.log(currentUser)
        }
        else{
            return <Redirect to="/" />;

        }
        

        return(
            <div>

                <img
                    src={'https://images.pexels.com/photos/1431305/pexels-photo-1431305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
                    style={{width:1365, height:668,opacity:0.9}}
                />      
                <div style={{position:"absolute",borderRadius:25,right:480,padding:20, background:" rgba(0, 0, 0, 0.6)",alignItems:"center", top:45,textAlign:"center"}}>

                <h1 style={{fontSize:40,
                                color:"#FBFF00", 
                                }}>Login</h1>

<p style={{fontSize:19, fontWeight:"bold", color:"#ffffff"}}>Please fill this form to login</p>


                    <div>
                        
                    
                        <input 
                            
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
                    <div>
                        <input 
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
                    <div >
                            <button style={{backgroundColor: "#FBFF00",
                                            borderRadius: 10,
                                            padding: 9,
                                            marginTop:20,
                                            marginBottom:10,
                                            border: "none",
                                            width: 200,
                                            opacity: 0.9,
                                            fontSize: 20,
                                            fontWeight:"bold"}} onClick={this.signin}>Login</button>
                        </div> 
                        <p style={{fontSize:19,fontWeight:"bold", color:"#ffffff"}}>Don't you have an account?</p>

                        <div>
                            <button style={{backgroundColor: "#FBFF00",
                                            borderRadius: 10,
                                            padding: 9,
                                            marginTop:3,
                                            border: "none",
                                            width: 200,
                                            opacity: 0.9,
                                            fontSize: 20,
                                            fontWeight:"bold"}} onClick={this.gotSignUpPage}>Sign up</button>
                        </div>
            </div>
            </div>
        )
    }
}

export default Login