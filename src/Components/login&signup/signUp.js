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

        db.collection("users").get().then((querySnapshot) => {
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

        const{email, username, type, password}= this.state; 

        const db = firebase.firestore();
        
        console.log(email,password ,"email,password")
        
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            db.collection("users").add({
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
                <button  onClick={this.addUser} > sign up</button>
            </div>
            <div className='link'>
                <Link to="./Login">Already have an account?</Link>
            </div>


      </div>

    )
}
}

export default SignUp;