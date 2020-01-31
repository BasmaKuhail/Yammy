import React, { Component } from 'react';
import * as firebase from 'firebase';
import './CardHome.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';


class Cards extends Component{

    state={
      meals:[]
    }

    componentDidMount(){
        const db = firebase.firestore();
        const {meals} = this.state;
        let me = this;
    
        db.collection("meals").get().then(function(querySnapshot) {
            querySnapshot.forEach((doc)=> {
                console.log(doc.id, " => ", doc.data());
                meals.push(doc.data())
                me.setState(meals)
                
            });
        });
    }

    
    render(){

        const {meals}= this.state;
        console.log(this.state.meals)

        
        return(
 
             <div className='TheCard'>
                {meals.map((meal)=>

                    <Card className='cardHome'>
                        <CardActionArea className='CardActionArea' >
                            <CardContent className='cardContent' >

                            <CardHeader 
                                className='title'
                                title= {meal.mealName}
                            />

                            <CardMedia
                                className='mediaHome'
                                image={meal.image}
                            />

                            </CardContent>

                        </CardActionArea>

                        <CardActions className=' CardActions'>


                            <Button size="small" color="primary"
                             onClick={()=>this.props.history.push('/meal')}>
                                Learn More
                            </Button>

                        </CardActions>


                    </Card>
                    
                )}
            </div>
                


            
        );

    
    }}


export default Cards;