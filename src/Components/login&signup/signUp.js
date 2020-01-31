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
        this.props.history.push('/Login')
    }


    render(){
        return(
            <div  className="base-container">
                <img className='bigimg' 
                    src={'https://images.pexels.com/photos/616412/pexels-photo-616412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
                />

                <div className="signup">
                            
                    <h1 className="header">Sign Up</h1>
                    <p className='text1'>Please fill this form to create an account</p>

                    <div className="form-group">
                        
                    
                        <input 
                            className="input1" 
                            type="text" 
                            name="email" 
                            placeholder ="  E-mail"  
                            defaultValue={this.state.email} 
                            onChange={this.handleChange}
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
                        />
                    </div>

                    <div className="form-group">
                        <text className='text1'>SignUp as:</text>
                        <text className='text4'>
                            <input 
                                type="radio" 
                                name="type" 
                                defaultValue="option1" 
                                value="user" 
                                onChange={this.handleChange} 
                            />
                            user
                        </text>  

                        <text className='text7'>
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
                            <button className="yellowButton" onClick={this.addUser}>Sign up</button>
                        </div> 
                        <p className='text1'>Do you already have account?</p>

                        <div className="form-group">
                            <button className="yellowButton" onClick={this.gotoLoginPage}>Login</button>
                        </div>
                        </div>


                   

            </div>

        </div>

        )
    }
}

export default SignUp;