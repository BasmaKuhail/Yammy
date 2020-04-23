import React  ,{Component}from 'react';
import './CheifHomePage.css';
import Cards from '../Card/Card.js'
import facebook from '../facebook.svg';
import instagram from '../instagram.svg'
import twitter from '../twitter.svg';
import back from '../gray.png';
import chef from '../chef.svg';
import more from '../more.svg';
import logout from '../logout .svg';
import * as firebase from 'firebase';
import saved from '../saved1.svg'
import search from '../search.svg'
import salad from '../salad.svg';
import desert from '../sweet.svg';
import drinks from '../drinks.svg';
import vagen from '../vagen.svg';
import breakfast from '../breakfast.svg.svg';
import lunch from '../lunch.svg';
import diner from '../breakfast.svg';
import ramadan from '../ramadan.svg'
import cake from '../cake.svg'
import chre from '../chre.svg'
import trip from '../trip.svg'
import Sandwiches from '../Sandwiches.svg'
import Soup from '../Soup.svg'
import fish from '../fish.svg'
import meals from '../meals.svg'

class Cheif extends Component{

  state={
    searchText:""
  }
  logout=()=>{
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    }

    eattimeMeals=(name)=>{
      console.log(name);
      this.props.history.push('/eatTime', {id: name})

    }

    occasion=(name)=>{
      console.log(name);
      this.props.history.push('/occasion', {id: name})

    }

    type=(name)=>{
      console.log(name);
      this.props.history.push('/type', {id: name})

    }

    vegan=()=>{
      this.props.history.push('/vegan')

    }

    search=(e)=>{
      this.setState({searchText:e.target.value})      
    }
    ClickSearch=()=>{
      this.props.history.push('/result', {id: this.state.searchText})

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
          onClick={()=>this.props.history.push('/favouriteChef')}
        />
        <div style={{flexDirection:"row"}}>
          <button className='searchButton' onClick={this.ClickSearch}>
            <img style={{width:20,height:20}} src={search}/>
          </button>
          <input 
            className='search' 
            type="text" 
            name="search" 
            placeholder="Search for an ingerdient" 
            onChange={this.search}/>
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

          <div className='filterUser'>
            <button className='FilterBreak1'  onClick={()=>this.eattimeMeals("breakfast")}> 
              <img className='imgFilter' src={breakfast}/>
            </button>
            <button className='FilterLunch1'   onClick={()=>this.eattimeMeals("lunch")}>
               <img className='imgFilter' src={lunch}/>
            </button>
            <button className='FilterDiner1'  onClick={()=>this.eattimeMeals("dinner")}>
              <img className='imgFilter' src={diner}/>
            </button>
            <button className='occasionsFilter'  onClick={()=>this.occasion("")}>
              <img className='imgFilter'  src={ramadan}/>
            </button>
            <button className='occasionsFilter'>
              <img className='imgFilter' src={cake}/>
              </button>       
            <button className='occasionsFilter'  >
              <img className='imgFilter' src={chre}/>
            </button>       
            <button className='occasionsFilter'>
              <img className='imgFilter' src={trip}/>
            </button>       
            <button className='buttonFilter'  onClick={()=>this.type("Drinks")}>
              <img className='imgFilter' src={drinks}/>
            </button>       
            <button className='buttonFilter' onClick={()=>this.type("Deserts")} >
              <img className='imgFilter' src={desert}/>
            </button>       
            <button className='buttonFilter' onClick={()=>this.type("Sandwiches")}> 
            <img className='imgFilter' src={Sandwiches}/></button>
            <button className='buttonFilter' onClick={()=>this.type("Soup")} >
              <img className='imgFilter' src={Soup}/>
            </button>       
            <button className='buttonFilter' onClick={()=>this.type("Sea food")} >
              <img className='imgFilter' src={fish}/>
            </button>       
            <button className='buttonFilter' onClick={()=>this.type("Main meals")}>
              <img className='imgFilter' src={meals}/>
            </button>
            <button className='buttonFilter' onClick={()=>this.type("Salads")}> <img className='imgFilter' src={salad}/></button>
            <button className='vegan' onClick={()=>this.vegan()} ><img className='imgFilter' src={vagen}/></button>       

          </div>
       

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
              onClick={()=>this.props.history.push('/addmeal')}>
                <img  className='more' src={more}/>
            </button>
          </div>
      </div>
       
  );
    }
}

export default Cheif;