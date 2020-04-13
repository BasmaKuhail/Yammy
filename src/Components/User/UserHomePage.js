import React  ,{Component}from 'react';
import './UserHomePage.css';
import Cards from '../Card/Card.js'
import facebook from '../facebook.svg';
import instagram from '../instagram.svg'
import twitter from '../twitter.svg'
import wasfa from '../wasfa.png'
import back from '../gray.png';
import user from '../user.svg';
import saved from '../saved1.svg'
import search from '../search.svg'


class User extends Component{
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

        </div>
          
        <div className='cards'>
          <Cards {...this.props}/>
        </div>
      </div>

       
  );
  }
}

export default User;
