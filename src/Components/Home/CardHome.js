import React, { Component } from 'react';
import * as firebase from 'firebase';
import './CardHome.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import back from '../gray.png';
import facebook from '../facebook.svg';
import instagram from '../instagram.svg';
import twitter from '../twitter.svg';


class Cards extends Component{

    state={
      meals:[],
      uid:"", 
      mealId:""
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
        this.setState({mealId: clickedMealId})
        console.log(this.state.mealId)

        const db = firebase.firestore();

        const {uid} = this.state;
        console.log(this.state)

        db.collection("mealUserId").add({
            mealId: clickedMealId,
            currentUserUid:uid
        
        })
        .then( (docRef) =>{
            this.props.history.push('/favourite')

        })


     }

     learnMore=(clickedMealId)=>{
        this.props.history.push('/meal', {id: clickedMealId})
     }

   
    render(){

        const {meals}= this.state;
        console.log(this.state.meals)

        
        return(
            <div className='contaner'>
                <img 
                    src={back} 
                    style={{width:'100%', height:60 }}
                />
                
                <div style={{padding:14}}>
                    <button className='SignUpButton' 
                        onClick={()=>this.props.history.push("SignUp")}>
                        Sign up
                    </button>

                   <div style={{flexDirection:"row"}}>
                        <a href="https://www.facebook.com/basmakuhail2003">
                            <img 
                                src={facebook}
                                className='facebookCard' 
                            />
                        </a>

                        <a href="https://www.facebook.com/basmakuhail2003">
                            <img 
                                src={instagram}
                                className='instagramCard'
                            /> 
                        </a>

                        <a href="https://www.facebook.com/basmakuhail2003">
                            <img 
                                src={twitter}
                                className='twitterCard'
                            />
                            </a>
                

                    </div>
        
                    {meals.map((meal)=>
                   
                    <Card className='card'>
                        <CardActionArea 
                        onClick={()=>this.learnMore(meal.id)}>
                        
                            <CardMedia
                                className='media'
                                image={meal.image}
                            />
                             <CardHeader 
                                style={{color:'#434a54', textAlign: 'left'}}
                                className='title'
                                title= {meal.mealName}
                            />
                        </CardActionArea>

                    </Card>
                )}
                </div>
            </div>
   
        );
    }
}

export default Cards;