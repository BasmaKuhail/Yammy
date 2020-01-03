import React, {Component} from 'react';
import * as firebase from 'firebase';
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
                this.props.history.push('/loggedPage')
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
                <h1>Login</h1>

                        <label>
                            Email
                        </label>
                        <input type="text" name="email" placeholder ="Enter your email"  defaultValue={this.state.email} onChange={this.handleChange}/>

                        <br/>

                        <label>
                            Password
                        </label>
                        <input type="password" name= "password" placeholder ="Enter your password" defaultValue={this.state.password} onChange={this.handleChange}/>

                        <br/>
                        <button onClick={this.signin}>Login</button>

            </div>
        )
    }
}

export default Login