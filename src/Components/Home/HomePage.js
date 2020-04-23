import React  ,{Component}from 'react';
import './HomePage.css';
import facebook from '../facebook.svg';
import instagram from '../instagram.svg';
import twitter from '../twitter.svg';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import RestaurantIcon from '@material-ui/icons/Restaurant';


class Home extends Component{

  state={
    search:""
  }
  handleChange=(e)=>{
    let key = e.target.name;

    this.setState({
        [key]:e.target.value
    })  }
  render(){

    return (
      <div>
        <img style={{width:1350, height:667,}}
          src={"https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>  
      
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
      
        <div className='buttonsHome'>
        
          <button className='aboutUs' onClick={()=>this.props.history.push("about")}>About us</button>
          <button className='home'>Home</button>
          <button className='signUpHome' onClick={()=>this.props.history.push("SignUp")}>
            Sign up/Login
          </button>

        </div>

    
        <div>
          <h1 className='heder'> Wasfa!</h1>
          <p className='enjoy'> Enjoy cooking, Enjoy the taste</p>
          <button 
            className='explore'
            onClick={()=>this.props.history.push("Card")}>
              Explore now
          </button>

        </div>
          
          
            
             
      </div>
          
    );
    }
}

export default Home;
