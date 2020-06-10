import React  ,{Component}from 'react';
import './aboutus.css'
import * as firebase from 'firebase';

import {chef} from '../hello.png'
import {young} from '../learner.png'
import facebook from '../facebook.svg';
import instagram from '../instagram.svg';
import twitter from '../twitter.svg';


class AboutUs extends Component{

  state={
    userType:""
  }


  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid);
        const db= firebase.firestore();
        console.log(user.uid);
        db.collection('users').doc(user.uid)
        .get()
        .then(doc=>{
          console.log(doc.data())
          console.log(doc.data().userType)
          this.setState({userType:doc.data().userType })
        })
      } else {
        //
      };
  })
  }

  push=()=>{
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid);
        const db= firebase.firestore();
        console.log(user.uid);
        db.collection('users').doc(user.uid)
        .get()
        .then(doc=>{
          console.log(doc.data())
          console.log(doc.data().userType)
          if (doc.data().userType=='cheif'){
            this.props.history.push('/cheif')
          }
          else{
            this.props.history.push('user')
          }
        })
      } else {
        this.props.history.push('Card')
      };
  })
}
 
  render(){

    return (
      <div>
      <div className="about-section">
        <h1 className="Head">About Wasfa</h1>
        <p className="Sub">Wafa is a recipes website where you learn how to cook and get many recipes easily as all recipes are classified into many catigories. It also give a chance for the cheves to share their recipes with others. Wasfa make it easier for the user in searching and it allow him to make a list with favourite meals </p>
      </div>

      <div>
      <img  className='img3' src={young}/>
      <img  className='img4' src={chef}/>

      </div>

      <div>
      <h3 className='learner'>1000 learners</h3>
      <h3 className='chef'>750 cheves</h3>   
      </div>
      <div>
      <button className='button2' onClick={this.push}>Let's cook</button>
      </div>

      <div style={{flexDirection:"row"}}>
          <a href="https://www.facebook.com/basmakuhail2003">
            <img 
              src={facebook}
              className='facebookHome' 
              
                  />
          </a>

          <a href="https://www.facebook.com/basmakuhail2003">
            <img 
              src={instagram}
              className='instegramHome' 
            /> 
          </a>

          <a href="https://www.facebook.com/basmakuhail2003">
            <img 
              src={twitter} 
              className='tiwitterHome'
            />
          </a>
        </div>
{/* 
      <h2 style="text-align:center">Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={"/w3images/team1.jpg"} alt="Jane" style="width:100%"/>
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>


  <div className="column">
    <div className="card">
      <img src={"/w3images/team2.jpg"} alt="Mike" style="width:100%"/>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={"/w3images/team3.jpg"} alt="John" style="width:100%"/>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
</div>  */}
</div>

    )}
  }

export default AboutUs;