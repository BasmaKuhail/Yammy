import React, {Component} from 'react';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';
import "./login.css";


class Login extends Component{

    state={
        email:"",
        password:"",

    }

    
    handleChange = ( e)=>{

        let key = e.target.name;

        this.setState({
            [key]:e.target.value
        })

    }

    signin = ()=>{

        console.log(            this.state.email,
            this.state.password,)
        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.password,
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
            <div className="base-container">

                <img className='bigimg' 
                    src={'https://backgrounddownload.com/wp-content/uploads/2018/09/background-for-food-website-3.jpg'}/>
                
                <div className="centered">
                        <h1 className="header">Login</h1>

                        <input className="input" type="text" name="email" placeholder ="Enter your email"  defaultValue={this.state.email} onChange={this.handleChange}/>

                        <input className="input" type="password" name= "password" placeholder ="Enter your password" defaultValue={this.state.password} onChange={this.handleChange}/>
                        
                        <button onClick={this.signin}>Login</button>
                        {/* <Link onClick={this.signin}>Login</Link> */}

                </div>

            </div>
        )
    }
}

export default Login