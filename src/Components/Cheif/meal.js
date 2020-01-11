import React, {Component} from 'react';
import * as firebase from 'firebase';



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
                {meals.map((meal)=>
                <div>
                <h1>{meal.mealName}</h1>
                <h5> Contents </h5>
                <p>{meal.mealContents}</p>
                <h5>recipe</h5>
                <p>{meal.recipe}</p>
                <h5>Time</h5>
                <p>{meal.timeNeed}</p>
                <h5>Type</h5>
                <p>{meal.type}</p>
                </div>
                )}
            </div>
        );
    }

}

export default Meal;