import React, {Component} from 'react';
import * as firebase from 'firebase';
import './signUp.css'
import {Link} from 'react-router-dom';


class Login extends Component{

    state={
        email:"",
        username:"",
    }

    handleChange = ( e)=>{
        let key = e.target.name;

        this.setState({
            [key]:e.target.value
        })
    }

    signin = ()=>{

        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.password
            ).then(()=>{
                this.props.history.push('/cheif')
            }).catch( (error)=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(error)
            // ...
        })
    };

    render(){
        return(
            <div>
                <h1 className='header'>Login</h1>
                <p className='please'>Please fill this form to log in</p>
                <p>________________________________________</p>

                <div>
                    <input 
                    className='input1'
                    type="text" 
                    name="email" 
                    placeholder ="Email"  
                    defaultValue={this.state.email} 
                    onChange={this.handleChange}
                    />
                </div>

                <div>
                    <input 
                    className='input1'
                    type="password" 
                    name= "password" 
                    placeholder ="Password" 
                    defaultValue={this.state.password} 
                    onChange={this.handleChange}
                    />
                </div>

                <div className='link'>
                    <button onClick={this.signin}>LogIn</button>
                </div>
            </div>
        )
    }
}

export default Login