import React, {Component, useContext} from 'react';
import { Redirect } from "react-router";
import * as firebase from 'firebase';
import "./style.css";
import { AuthContext } from "../../Auth";
 


class Login extends Component{

    state={
        email:"",
        password:"",
        userType:"",

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
                console.log(res.user.uid)
                const requied= res.user.uid
                if (requied.userType=="cheif"){
                   (this.props.history.push("/cheif"))
                }else{
                    (this.props.history.push("/user"))
                }
                // this.props.history.push('/cheif')
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
           // return <Redirect to="/" />;
        }

        

        return(
            <div className="base-container">

                <img className='bigimg' 
                    src={'https://backgrounddownload.com/wp-content/uploads/2018/09/background-for-food-website-3.jpg'}/>
                
                <div className="centered">
                        <h1 className="header">Login</h1>

                        <input className="input1" type="text" name="email" placeholder ="    Enter your email"  defaultValue={this.state.email} onChange={this.handleChange}/>

                        <input className="input1" type="password" name= "password" placeholder ="    Enter your password" defaultValue={this.state.password} onChange={this.handleChange}/>
                        
                        <button onClick={this.signin} className="yellowButton">Login</button>

            </div>
            </div>
        )
    }
}

export default Login