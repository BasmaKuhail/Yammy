import React  ,{Component}from 'react';
import './UserHomePage.css';
import Cards from '../Card/Card.js'
import facebook from '../facebook.svg';
import instagram from '../instagram.svg';
import twitter from '../twitter.svg';
import wasfa from '../wasfa.png'
import back from '../gray.png';
import user from '../user.svg';
import saved from '../saved1.svg'
import search from '../search.svg'
import * as firebase from 'firebase';

  class User extends Component{

    logout=()=>{
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    }
    
    render(){

    return (
      <div className='contaner'>
        <img 
          src={back} 
          style={{width:'100%', height:60 }}
        />
        

        <img 
          className="saved" 
          src={saved}
          onClick={()=>this.props.history.push('/favourite')}
        />
          
        <div style={{flexDirection:"row"}}>
          <button className='searchButton'>
            <img style={{width:20,height:20}} src={search}/>
          </button>
          <input className='search' type="text" name="search" placeholder="Search.."/>
        
          <img 
            src={user}
            className='user'
          />

          <a href="https://www.facebook.com/basmakuhail2003">
            <img 
              src={facebook}
              className='facebookUser'/> 
          </a>

          <a href="https://www.facebook.com/basmakuhail2003">
            <img 
              src={instagram}
              className='instagramUser'/>
          </a>

          <a href="https://www.facebook.com/basmakuhail2003">
            <img 
              src={twitter}
              className='twitterHome'/>               
          </a>       

          <button 
            className="logout" 
            onClick={()=>this.logout()}
        >
              Logout
          </button>

          <img 
              className='yummyImgUser'
              src={'https://images.squarespace-cdn.com/content/v1/58a2fdcebebafb516ada1fe8/1540290099613-3ROW0HJZE2XYX6V0X88E/ke17ZwdGBToddI8pDm48kHAe7tJsq_QjUiQiP46BuYd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UW40zwkR4L7HOs8xw3xsyz7UeCy_bEEXkaPS43zxyZdvP7cJNZlDXbgJNE9ef52e8w/Logo+Yummy.png?format=750w'}
            />
          </div>
        <div className='cards'>
          <Cards {...this.props}/>
        </div>
      </div>

       
  );
  }
}

export default User;
