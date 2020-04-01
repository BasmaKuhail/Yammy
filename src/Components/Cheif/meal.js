import React, {Component} from 'react';
import './meal.css'
import * as firebase from 'firebase';
import CardMedia from '@material-ui/core/CardMedia';


//this component to show the whole info about the meal when click "learn more" on the card

class Meal extends Component{
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
            <div>
            
                <img className='bigimgmeal' 
                    src={'https://images.pexels.com/photos/352810/pexels-photo-352810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
                />

                {meals.map((meal)=>

                <div className='meal'>
                    <h1 className='mealName'>{meal.mealName}</h1>
                    
                    <CardMedia
                        className='mealImage'
                        image={meal.image}
                    />
                <div>
                    <div className='space'>
                        <p className='contents'> CONTENTS:  </p>
                        <p className='mealContents'>{meal.mealContents}</p>
                    </div>
                
                    <div className='space'>
                        <p className='contents'>RECIPE:</p>
                        <p className='mealContents'>{meal.recipe}</p>
                    </div>

                    <div className='space'>
                        <p className='contents'>TIME:</p>
                        <p className='mealContents'>{meal.timeNeed}</p>
                    </div>

                    <div className='space'>
                        <p className='contents'>TYPE:</p>
                        <p className='mealContents'>{meal.type}</p>
                    </div>
                </div>
                </div>
                )}
            </div>
        );
    }

}

export default Meal;