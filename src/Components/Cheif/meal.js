import React, {Component} from 'react';
import './meal.css'
import * as firebase from 'firebase';
import back from '../gray.png';



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
            <div className='contanerMeal'>
                <img 
                src={back} 
                style={{width:1360, height:60 }}
                />
                {meal.map((item)=>

                <div>
                    <h1 className='mealTitle' >{item.mealName}</h1>
                
                    <div style={{flexDirection:"row"}}>
                        <div style={{flexDirection:"row"}}>
                            <p className='Title'> CONTENTS:  </p>
                            <p className='contents' >{item.mealContents}</p>
                        </div>
                        <div style={{flexDirection:"row"}}>
                            <p className='Title'>RECIPE:</p>
                            <p className='contents'>{item.recipe}</p>
                        </div>
                        <div style={{flexDirection:"row"}}>
                            <p  className='Title'>TIME:</p>
                            <p className='contents' >{item.timeNeed}</p>
                        </div>
                        <div style={{flexDirection:"row"}}>
                            <p className='Title' >TYPE:</p>
                            <p className='contents'>{item.type}</p>
                        </div>
                        
                    </div>
                    <img className='mealImg'  src={item.image}/>

               </div>
                )}
            </div>
        );
    }

}

export default Meal;