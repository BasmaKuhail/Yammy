import React, {Component} from 'react';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom';
import './signUp.css'


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

        db.collection("User").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().first}`);
            });
        });
    }

    handleChange = (e)=>{

        let key = e.target.name;

        this.setState({
            [key]:e.target.value
        })

    }

    addUser = ()=>{


        const db = firebase.firestore();
        const{email, username, type, password }= this.state; 


        console.log(this.state)

        db.collection("User").add({
            Email:email,
            password:password,
            Username:username,
            userType: type,
        })

    }
      
render(){
    return(
        <div>
            <h1 className='header'>Sign Up</h1>
            <p className='please'>Please fill this form to create an account</p>
            <p>________________________________________</p>
            <div>                  
                <input 
                    className='input1'
                    type="text" 
                    name= "username" 
                    placeholder ="Username" 
                    defaultValue={this.state.username} 
                    onChange={this.handleChange}
                />
            </div> 

            <div>
                <input 
                    className='input1'
                    type="text" 
                    name="email" 
                    placeholder ="E-mail"  
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
                    
            <div>
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

            </div>
                  
            <div className='link'>
                <Link to="/cheif" onClick={this.addUser}>Sign up</Link>
            </div>
            <div className='link'>
                <Link to="./Login">Already have an account?</Link>
            </div>


      </div>

    )
}
}

export default SignUp;