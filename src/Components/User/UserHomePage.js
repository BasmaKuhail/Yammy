
import React  ,{Component}from 'react';
import './UserHomePage.css';
import Cards from '../Card/Card.js'
import facebook from '../facebook.svg';
import instagram from '../instagram.svg'
import twitter from '../twitter.svg'
import wasfa from '../wasfa.png'


  class User extends Component{
    render(){

      return (
        <div>

          <img className='bigimg' 
            src={'https://images.pexels.com/photos/616412/pexels-photo-616412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
          />
          

          <div className="Top-left"> 
            <a href="https://www.facebook.com/basmakuhail2003">
              <img 
                className='imageLeft' 
                src={facebook} 
              />
            </a>

            <a href="https://www.facebook.com/basmakuhail2003">
              <img 
                className='imageLeft' 
                src={instagram} 
              /> 
            </a>

            <a href="https://www.facebook.com/basmakuhail2003">
              <img 
                className='imageLeft' 
                src={twitter} 
              />
            </a>
          </div>
    
          <button 
            className="favourite" 
            onClick={()=>this.props.history.push('/favourite')}>
              My Favourites
          </button>

          <img 
              className='yummyImgUser'
              src={wasfa}
            />
          
          <div className='cards'>
            <Cards {...this.props}/>
          </div>
        </div>

       
  );
    }
}

export default User;
