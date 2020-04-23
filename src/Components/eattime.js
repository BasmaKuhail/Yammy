import React, {Component} from 'react';
import * as firebase from 'firebase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import back from './gray.png';
import back1 from './back.svg'


class EatTime extends Component{

    state={
        meals:[], 
        name:""
      
    }


    componentDidMount(){

        const db= firebase.firestore();
        let me = this;
        const { state } = this.props.history.location;

        console.log('mealTime', state.id);
        this.setState({name:state.id})
        const {meals}= this.state;




        db.collection("meals").where("TimeToEat", "array-contains",state.id)
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=> {
                // doc.data() is never undefined for query doc snapshots
                const fetchedMealData = {
                    id: doc.id,
                    ...doc.data()
                  };
                  console.log(fetchedMealData)
                meals.push(fetchedMealData);
                me.setState(meals)
        });
        })
    
    }
    learnMore=(clickedMealId)=>{
        this.props.history.push('/meal', {id: clickedMealId})
     }
    render(){
        const {meals}= this.state;
        console.log(this.state.meals); 


        return(

            <div className='contaner'>
                <img 
                    src={back} 
                    style={{width:1366, height:60 }}
                />
                
                <div style={{padding:14}}>
                   
                    <img 
                        className='backimg' 
                        style={{
                            width:30, 
                            position:'absolute' ,
                            marginLeft: 10,
                            left:0,
                            top:10}} 
                            src={back1} onClick={()=>this.props.history.push("/cheif")}/>

                    <div>Here are {this.state.name} meals</div>
                   
            
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

export default EatTime;
