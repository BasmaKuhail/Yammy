import React, { Component } from 'react';
import * as firebase from 'firebase';
import './Card.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import savedFull from '../savedFull.svg';
import savedEmpty from '../savedEmpty.svg';
import desert from '../sweet.svg';





class Cards extends Component{

    state={
      meals:[],
      uid:"", 
      mealId:"",
      favMeals:[]
    }

    componentDidMount(){

        const db = firebase.firestore();
        const {meals, favMeals,uid, mealId} = this.state;
        let me = this;

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User logged in already or has just logged in.
              console.log(user.uid);
              this.setState({uid:user.uid})
            } else {
              // User not logged in or has just logged out.
            };
        })
    
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

    }


    getMealId=(clickedMealId)=> {
        const {favMeals,uid}=this.state;
        console.log(clickedMealId);
        this.setState({mealId:clickedMealId});
        console.log(this.state.mealId);
        const db = firebase.firestore();
        console.log(this.state.uid);

          db.collection('mealUserId').where('currentUserUid','==',this.state.uid)
          .get()
          .then((querySnapshot)=> {
            querySnapshot.forEach((doc)=> {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id,'=>',doc.data());
                const favMealsList=[]
                const fetchedFavMealsId= doc.data().mealId;
                favMealsList.push(fetchedFavMealsId)
                console.log(favMealsList);
                favMeals.push(fetchedFavMealsId)
                this.setState(favMeals)
                console.log(this.state.favMeals)

            })
        }).then(()=>{
                if (this.state.favMeals.includes(clickedMealId)){
                    alert('This meal is already saved')
                }
                else{
                db.collection("mealUserId").add({
                    mealId: clickedMealId,
                    currentUserUid:uid
                
                })
                alert('This meal is saved')

                
            }
        });

     }

     



     learnMore=(clickedMealId)=>{
         console.log(clickedMealId);
        this.props.history.push('/meal', {id: clickedMealId})
     }

    render(){

        const {meals}= this.state;
        console.log(this.state.meals)
    
        return(
            <div>
                
                {meals.map((meal)=>
                    <Card className='card'>

                        <CardActionArea
                          className='area'
                         >
                            <CardMedia
                                className='media'
                                image={meal.image}
                                onClick={()=>this.learnMore(meal.id)}/>
                            <CardHeader
                                className='title'
                                title= {meal.mealName}
                                onClick={()=>this.learnMore(meal.id)}/>
                            
                             <CardActions className='actions'>
                            <IconButton 
                                className='expandOpen'
                                onClick={()=>this.getMealId(meal.id)}>
                                <img 
                                    className='saveCard'
                                    src={savedEmpty}/>
                                    
                            </IconButton>
                            </CardActions>
                        </CardActionArea>
                        
                    </Card>
                    
                )}
            </div>
          
        );
    
    }
}

export default Cards;