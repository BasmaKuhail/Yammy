import React, { Component } from 'react';
import * as firebase from 'firebase';
import './Card.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardMedia from '@material-ui/core/CardMedia';


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

                
                <div>
                    {meals.map((meal)=>

                    <Card className='card'>
                        <CardActionArea>
                            <CardContent>
                            <CardHeader 
                                className='title'
                                title= {meal.mealName}
                            />

                            <CardMedia
                                className='media'
                                image={meal.image}
                            />

                            </CardContent>

                        </CardActionArea>

                        <CardActions>


                            <Button size="small" color="primary"
                              onClick={()=>this.learnMore(meal.id)}>
                            Learn More
                            </Button>

                            <IconButton aria-label="add to favorites" className='expandOpen'onClick={()=>this.getMealId(meal.id)}>
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>

                    </Card>
                    
                )}
                    </div>
                


            
        );

    
    }

}

export default Cards;