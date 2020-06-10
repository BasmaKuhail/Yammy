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
        <img style={{width:1366, height:634,}}
          src={"https://images.unsplash.com/photo-1547938367-b794f5532622?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"}/>  
      
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
          <button className='home' onClick={()=>this.props.history.push("Card")}>Home</button>
          <button className='signUpHome' onClick={()=>this.props.history.push("SignUp")}>
            Sign up/Login
          </button>

        </div>

    
        <div>
          <h1 className='heder'> Wasfa</h1>
          <p className='enjoy'> Learn how to cook and share your recipes!</p>
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