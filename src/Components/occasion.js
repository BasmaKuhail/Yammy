import React, {Component} from 'react';
import * as firebase from 'firebase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import back from './gray.png';
import more from './more.svg'
import { teal } from '@material-ui/core/colors';


class Vegan extends Component{

    state={
        meals:[],
    }


    componentDidMount(){

        


        const db= firebase.firestore();
        let me = this;

                db.collection("meals").where("occasions", "array-contains","Veg")
                .get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach((doc)=> {
                        const fetchedMealData = {
                            id: doc.id,
                            ...doc.data()
                          };
                          console.log(fetchedMealData)
                        this.state.meals.push(fetchedMealData);
                        me.setState(this.state.meals)

                });
        
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
            this.props.history.push('/favourite')

        })


     }

    learnMore=(clickedMealId)=>{
        console.log(clickedMealId);
       this.props.history.push('/meal', {id: clickedMealId})
    }
   
    render(){
        const {meals}= this.state;
        console.log(this.state.meals)

        return(
            <div className='contaner'>
                <img 
                    src={back} 
                    style={{width:1366, height:60 }}
                />
                                <text>Here are vegan meals</text>

                <div style={{padding:14}}>

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
                        
                        </CardActionArea>



                        </Card>
                    
                )}
                 
            </div>
            </div>
                

        )
    }
}

export default Vegan;
