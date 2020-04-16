import React, {Component, useContext} from 'react';
import { Redirect } from "react-router";
import * as firebase from 'firebase';
import "./signUpLogIn.css";
import { AuthContext } from "../../Auth";
import image from '../signUp.png'



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
        // const { currentUser } = this.context
        // if (currentUser) {


        //     console.log(currentUser)
        // }
        // else{
        //     return <Redirect to="/" />;

        // }
        

        return(
            <div className="base-container">

                <img className='imagesi'
                    src={image}

                />
                <div className="signup">
                    <h1 className='heder1'> WASFA</h1>
                    <p className='enjoy1'> Enjoy cooking, Enjoy the taste!</p>
                        
            </div>
                <div className="signup1">
                        <h1 className="header">Login</h1>

                        <input 
                        className="input1" 
                        type="text" 
                        name="email" 
                        placeholder =" E-mail"  
                        defaultValue={this.state.email} 
                        onChange={this.handleChange}
                        />

                        <input 
                        className="input1" 
                        type="password" 
                        name= "password" 
                        placeholder =" Password" 
                        defaultValue={this.state.password} 
                        onChange={this.handleChange}
                        />
                        
                        <button onClick={this.signin} className="yellowButton">Login</button>

            </div>
            </div>
        )
    }
}

export default Login