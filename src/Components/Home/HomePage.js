import React  ,{Component}from 'react';
import './HomePage.css';
import Cards from './CardHome.js';
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

          <img style={{width:1353, height:668,}}
          src={"https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>  
        

        <div style={{flexDirection:"row"}}>
            <a href="https://www.facebook.com/basmakuhail2003">
                <img 
                    src={facebook} 
                    style={{position:"absolute",
                        width:40,
                        bordeRadius: 1000,
                        marginRight: 50, 
                        right:0, 
                        top:590}}
                />
            </a>

            <a href="https://www.facebook.com/basmakuhail2003">
                <img 
                    src={instagram} 
                    style={{position:"absolute",
                        width:40,
                        top:590,
                        bordeRadius: 1000,
                        marginRight: 50, 
                        right:70}}
                /> 
            </a>

            <a href="https://www.facebook.com/basmakuhail2003">
                <img 
                    src={twitter} 
                    style={{position:"absolute",
                        width:40,
                        top:590,
                        bordeRadius: 1000,
                        right:190}}
                />
                </a>
          </div>
        


          <div style={{position:"absolute",right:60, top:30, flexDirection:"row"}}>

          <button style={{backgroundColor: "#00000000",
            width: 120,
            borderRadius: 20,
            border: "2px solid",
            borderColor:"white",
            fontSize: 18,
            color:"#FBFF00",
            fontWeight:"bold",
            marginRight:20,
            padding:16
            }}>About us</button>
          <button style={{backgroundColor: "#00000000",
            width: 120,
            borderRadius: 20,
            border: "2px solid",
            borderColor:"white",
            fontSize: 16,
            fontWeight:"bold",
            color:"#FBFF00",
            marginRight:20,
            padding:16

          }}>Home</button>
          <button style={{
            backgroundColor: "#00000000",
            width: 120,
            borderRadius: 20,
            border: "2px solid",
            borderColor:"white",
            fontSize: 16,
            fontWeight:"bold",
            color:"#FBFF00",
            padding:16
          }}
          onClick={()=>this.props.history.push("SignUp")}>
            Sign up
            </button>

          </div>

  
          <div>
      <h1 style={{fontSize:80,
                color:"#F5F905", 
                marginBottom:5,
                position: "absolute",
                  top: 200,
                  left: 100,}}>
                    Delicious!
        </h1>
      <p style={{fontSize:26,
                color:"#F8FB3E",
                position: "absolute",
                  top: 330,
                  left: 110,}}>
                    Enjoy cooking, Enjoy the taste
        </p>
        <button style={{
        backgroundColor: "#00000000",
        width: 150,
        borderRadius: 20,
        border: "2px solid",
        borderColor:"white",
        fontSize: 18,
        fontWeight:"bold",
        color:"#FBFF00",
        padding:16,
        position: "absolute",
        top: 420,
        left: 200,
      }}
      onClick={()=>this.props.history.push("Cards")}>
        Explore now
        </button>

      </div>
          
          
            
             
      </div>
          
      );
    }
}

export default Home;