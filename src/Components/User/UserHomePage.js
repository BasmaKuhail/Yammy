import React  ,{Component}from 'react';
import './UserHomePage.css';
import * as firebase from 'firebase';
import Cards from '../Card/Card.js';
import facebook from '../facebook.svg';
import instagram from '../instagram.svg'
import twitter from '../twitter.svg'
import back from '../gray.png';
import user from '../user.svg';
import saved from '../saved1.svg'
import search from '../search.svg'
import salad from '../salad.svg';
import desert from '../sweet.svg';
import drinks from '../drinks.svg';
import vagen from '../vagen.svg';
import breakfast from '../breakfast.svg.svg';
import lunch from '../lunch.svg';
import diner from '../breakfast.svg';
import logout from '../logout .svg';

class User extends Component{

    logout=()=>{
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    };
    
    render(){

    return (
      <div className='contaner'>
        <img 
          src={back} 
          style={{width:1366, height:60 }}
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
          <img
          className='logout'
          src={logout}
          // onClick={this.logout}

          onClick={()=>this.props.history.push('/')}
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
          <div className='filterUser'>
            <button className='FilterBreak'> <img className='imgFilter' src={breakfast}/></button>
            <button className='FilterLunch'> <img className='imgFilter' src={lunch}/></button>
            <button className='FilterDiner'><img className='imgFilter' src={diner}/></button>
            <button className='buttonFilter'><img className='imgFilter' src={vagen}/></button>       
            <button className='buttonFilter' ><img className='imgFilter' src={drinks}/></button>       
            <button className='buttonFilter'><img className='imgFilter' src={desert}/></button>       
            <button className='buttonFilter'> <img className='imgFilter' src={salad}/></button>
          </div>
       
       

          <img
          className='logout'
          src={logout}
          onClick={()=>this.logout()}
          />

          </div>
        <div className='cards'>
          <Cards {...this.props}/>
        </div>
      </div>

       
  );
  };
}

export default User;
