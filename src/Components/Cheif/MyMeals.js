import React, {Component} from 'react';
import Cards from '../Home/CardHome';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import chef from '../chef.svg';
import * as firebase from 'firebase';
import './Mymeals.css'
import ChefLayOut from '../chefLayOut'



class MyMeals extends Component{

    state={
        meals:[],
        uid:"",
    }


    componentDidMount(){

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User logged in already or has just logged in.
              console.log(user.uid);
              this.setState({uid:user.uid});
              console.log(this.state.uid);
            } else {
              // User not logged in or has just logged out.
            };
            console.log("The user id is =>" + this.state.uid)

        


        const db= firebase.firestore();
        let me = this;
        console.log("The user id is =>" + this.state.uid)

                db.collection("meals").where("usid", "==",this.state.uid)
                .get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach((doc)=> {
                        // doc.data() is never undefined for query doc snapshots
                        // console.log(doc.id, " => ", doc.data());
                        // this.state.meals.push(doc.data());
                        // me.setState(this.state.meals)
                        const fetchedMealData = {
                            id: doc.id,
                            ...doc.data()
                          };
                          console.log(fetchedMealData)
                        this.state.meals.push(fetchedMealData);
                        me.setState(this.state.meals)

                });
        
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
          <div>
               
          <ChefLayOut {...this.props}/>
<div className="main">
<h2 style={{color:"rgb(245, 80, 3)", marginTop:80, fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", fontSize:34}}>My meals</h2>   
                  <div className="meals">
       
                       {meals.map((meal)=>
  
                          <Card className='card'>
  
                          <CardActionArea
                          className='area'
                          >
                              <CardMedia
                                  className='media2'
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



       </div>

        )
    }
}

export default MyMeals;
