import React  ,{Component}from 'react';
import './HomePage.css';
import Cards from './CardHome.js';
import facebook from '../facebook.svg';
import instagram from '../instagram.svg';
import twitter from '../twitter.svg';
import wasfa from '../wasfa.png'
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

          <img className='bigimgHome' 
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

        
              <button 
              className="sginUpButton" 
              onClick={()=>this.props.history.push('/SignUp')}>
              SignUp
              </button>
            </div>

          <div className='centeredHome'>
            <img 
                className='yummyImg'
                src={wasfa}
            />
            
          </div>
          
          <div classNmae="search">
            <LocalDiningIcon fontSize="large" className='SearchIcon' />
            <input 
                        className="Search" 
                        type="text " 
                        name= "search" 
                        placeholder ="  search a meal" 
                        defaultValue={this.state.search} 
                        onChange={this.handleChange}
            />
          </div>

          <div className='cards'>
              <Cards {...this.props}/>
          </div>
          
            
             
      </div>
          
      );
    }
}

export default Home;
