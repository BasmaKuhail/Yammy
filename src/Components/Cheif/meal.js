import React, {Component} from 'react';
import './meal.css'
import * as firebase from 'firebase';
import CardMedia from '@material-ui/core/CardMedia';


//this component to show the whole info about the meal when click "learn more" on the card

class Meal extends Component{
    state={
        meal:[]
      }
  
      componentDidMount(){

        const { state } = this.props.history.location;
        console.log('mealId', state.id);
          const db = firebase.firestore();
          const {meal} = this.state;
          let me = this;

        
          db.collection('meals').doc(state.id)
                .get()
                .then((doc)=>{
                        console.log(doc.data());
                        meal.push(doc.data());
                        me.setState(meal)

                    });

      }

    render(){
        const {meal}= this.state;
        console.log(this.state.meal)

        return(
            <div>
            
                <img className='bigimgmeal' 
                    src={'https://images.pexels.com/photos/352810/pexels-photo-352810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
                />

                {meal.map((item)=>

                <div className='meal'>
                    <h1 className='mealName'>{item.mealName}</h1>
                    
                    <CardMedia
                        className='mealImage'
                        image={item.image}
                    />
                <div>
                    <div className='space'>
                        <p className='contents'> CONTENTS:  </p>
                        <p className='mealContents'>{item.mealContents}</p>
                    </div>
                
                    <div className='space'>
                        <p className='contents'>RECIPE:</p>
                        <p className='mealContents'>{item.recipe}</p>
                    </div>

                    <div className='space'>
                        <p className='contents'>TIME:</p>
                        <p className='mealContents'>{item.timeNeed}</p>
                    </div>

                    <div className='space'>
                        <p className='contents'>TYPE:</p>
                        <p className='mealContents'>{item.veg}</p>
                    </div>
                </div>
                </div>
                )}
            </div>
        );
    }

}

export default Meal;