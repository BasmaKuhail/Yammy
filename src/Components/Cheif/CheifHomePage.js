import React  ,{Component}from 'react';
import './CheifHomePage.css';
import Cards from '../Card/Card.js'
import facebook from '../facebook.svg';
import instagram from '../instagram.svg'
import twitter from '../twitter.svg';
import wasfa from '../wasfa.png';
import back from '../gray.png';
import search from '../search.svg'
import chef from '../chef.svg';
import more from '../more.svg';
import saved from '../saved1.svg';
import logout from '../logout .svg';
import * as firebase from 'firebase';


  class Cheif extends Component{
    logout=()=>{
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    }
    render(){

      console.log(this.props)
    return (
      <div className='contaner'>
        <img 
          src={back} 
          style={{width:1366, height:60 }}
        />
          
          <img 
          className="savedChef" 
          src={saved}
          onClick={()=>this.props.history.push('/favourite')}
        />
          <div style={{flexDirection:"row"}}>
          <button className='searchButton'>
            <img style={{width:20,height:20}} src={search}/>
          </button>
          <input className='search' type="text" name="search" placeholder="Search.."/>
        
          <img 
            src={chef}
            className='user'
          />

          <img
          className='logout'
          src={logout}
          onClick={()=>this.logout()}
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
              className="buttonMyMeals" 
              onClick={()=>this.props.history.push('/myMeals')}>
                My Meals
            </button>
          </div>
       

          <div className='cards'>
            <Cards {...this.props}/>
            <button 
              className="buttonAdd" 
              onClick={()=>this.props.history.push('/add')}>
                <img  className='more' src={more}/>
            </button>
          </div>
      </div>
       
  );
    }
}

export default Cheif;