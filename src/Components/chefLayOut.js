import React  ,{Component}from 'react';
import './chefLayOut.css';
import chef from './chef.svg';
import salad from './salad2.jpeg';
import burger from './burger.jpeg';
import pastry from './pastry.jpeg';
import soup from './soup.jpeg';
import sandwich from './sandwich.jpeg';
import seaFood from './fish.jpeg';
import drink from './drink.jpeg';
import desert from './desert.jpeg';
import breakfast from './breakfast2.jpeg'
import lunch from './lunch.jpeg'
import dinner from './dinner.jpeg'
import ramadan from './ramadan.png'
import christmas from './christmas.jpeg'
import birthday from './birthday.png'
import picnic from './picnic.jpeg'
import asian from './asian.jpeg'
import westren from './westren.jpg'
import eastren from './eastren.jpeg'
import youtube from './you.png'
import twitter from './twitter.png'


import * as firebase from 'firebase';



  class ChefLayOut extends Component{

    state={
      meals:[],
      uid:"", 
      mealId:"",
      searchText:""
    }

    componentDidMount(){

      const db = firebase.firestore();
      const {meals} = this.state;
      let me = this;
  
      db.collection("meals").get().then(function(querySnapshot) {
          querySnapshot.forEach((doc)=> {
              const fetchedMealData = {
                  id: doc.id,
                  ...doc.data()
                };
              meals.push(fetchedMealData);
              me.setState(meals)
              
          });
      });
      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            // User logged in already or has just logged in.
            console.log(user.uid);
            this.setState({uid:user.uid})
          } else {
            // User not logged in or has just logged out.
          };
        });
  }


  getMealId=(clickedMealId)=> {
      console.log(clickedMealId);
      this.setState({mealId:clickedMealId});
      console.log(this.state.mealId);

      const db = firebase.firestore();

      const {uid} = this.state;
      console.log(this.state)

      db.collection("mealUserId").add({
          mealId: clickedMealId,
          currentUserUid:uid
      
      })
      .then( (docRef) =>{
          this.props.history.push('/favouriteChef')

      })


   }



   learnMore=(clickedMealId)=>{
       console.log(clickedMealId);
      this.props.history.push('/meal', {id: clickedMealId})
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

    region=(name)=>{
      console.log(name);
      this.props.history.push('/region', {id: name})

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

      const {meals} = this.state;
      console.log(this.props)
    return (

        <div>
           
           <div class="topnav">
<img onClick={()=>this.props.history.push('/cheif')} src={chef} className='user'/>
<button className="signUp" onClick={()=>this.logout()}>Log out</button>
<button className="about-us" onClick={()=>this.props.history.push("about")}>About us</button>
<button className="my-meals" onClick={()=>this.props.history.push('/myMeals')}>My meals</button>
<button className="add" onClick={()=>this.props.history.push('/add')}>Add meal</button>
<button className="fav" onClick={()=>this.props.history.push('/favouriteChef')}>Favourite</button>
<button className="searchbtn" onClick={this.ClickSearch}>Search for meals</button>  
<input className='search' type="text" name="search" placeholder="Search for an ingerdient"  onChange={this.search}></input>
      

</div>
<div className="sidenav">
  <h3 className="welcome">Welcome to Wasfa!</h3>
  {/* <hr className="line"></hr> */}
  
  {/* <button className="about">About us</button> */}
  {/* <hr className="line"></hr> */}
  <h3 className="catigories">Catigories</h3>
  <h4 className="mealType">Meal Type</h4>
  <div>
    <img className="img" onClick={()=>this.type('Salads')} src={salad}/>     
    <img className="img" onClick={()=>this.type('Main meals')} src={burger}/>     
    <img className="img" onClick={()=>this.type('Pastries')}src={pastry}/>     
    <img className="img" onClick={()=>this.type('Soup')} src={soup}/>  

  </div>
 
  <div className="catigory" >   
    <img className="img" onClick={()=>this.type('Sandwiches')}src={sandwich}/>   
    <img className="img" onClick={()=>this.type('Sea food')}src={seaFood}/>      
    <img className="img" onClick={()=>this.type('Drinks')}src={drink}/>   
    <img className="img"onClick={()=>this.type('Deserts')} src={desert}/>     

  </div>
  


  <h4 className="mealType">Meal eat time</h4>
  <div className="catigory"> 
    <img className="img" onClick={()=>this.eattimeMeals('breakfast')} src={breakfast}/> 
    <img className="img" onClick={()=>this.eattimeMeals('lunch')} src={lunch}/>   
    <img className="img"  onClick={()=>this.eattimeMeals('dinner')} src={dinner}/>     

  </div>
  <h4 className="mealType">Occasions</h4>
  <div className="catigory"> 

    <img className="img" onClick={()=>this.occasion('Ramadan')} src={ramadan}/> 
    <img className="img"  onClick={()=>this.occasion('Christmas')}src={christmas}/>   
    <img className="img" onClick={()=>this.occasion('Birthday')} src={birthday}/>     
    <img className="img"   onClick={()=>this.occasion('Picnic')}src={picnic}/>     

  </div>

  <h4 className="mealType">Around the world</h4>
  <div className="catigory"> 
    <img className="img" onClick={()=>this.region('asian')} src={asian}/>   
    <img className="img" onClick={()=>this.region('wastren')} src={westren}/>     
    <img className="img" onClick={()=>this.region('eastren')}src={eastren}/>     

  </div>
  <h3 className="follow-text">Follow us on</h3>
  <div>
  <img className="follow" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6feoNDAWR_ctDE6KlDpOz-_I8xWYzl7fELP0AdntHsVwbdVRe&usqp=CAU"}/>   
    <img className="follow" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQdv0qut-prS8K10kvIDLOIUEJ0K7AiA6UZjR5460mKanhECsc&usqp=CAU"}/>     
    <img className="follow" src={twitter}/>     
       <img className="follow" src={youtube}/>     

    </div>
    </div>
{/* <div className="main">
<h2 style={{color:"rgb(245, 80, 3)", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", fontSize:34}}>All meals</h2>

</div> */}

        </div>
       
  );
    }
}

export default ChefLayOut;