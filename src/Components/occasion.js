import React, {Component} from 'react';
import * as firebase from 'firebase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import savedFull from './savedFull.svg';
import savedEmpty from './savedEmpty.svg';
import ChefLayOut from './chefLayOut';
import UserLayOut from './userLayOut';

import './chefLayOut.css';


class Occasion extends Component{

    state={
        meals:[],
        name:"",
        favMeals:[]


    }


    componentDidMount(){


        const db= firebase.firestore();
        let me = this;
        const { state } = this.props.history.location;

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

            const{userType}=this.state;
            db.collection('users').doc(this.state.uid)
            .get()
            .then((doc)=>{
                console.log(doc.data());
                const fetchedType= doc.data().userType;
                console.log(fetchedType)    
                if (fetchedType=="cheif"){
                    this.setState({chef:true})
                }
                else{
                    //
                }
            });
        });

        console.log('Occasion', state.id);
        this.setState({name:state.id})
        const {meals}= this.state;


                db.collection("meals").where("occasions", "array-contains",state.id)
                .get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach((doc)=> {
                        const fetchedMealData = {
                            id: doc.id,
                            ...doc.data()
                          };
                          console.log(fetchedMealData)
                        meals.push(fetchedMealData);
                        me.setState(this.state.meals)

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
                console.log(doc.data());
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
        let layout
        if(this.state.chef){
            layout=
            <div>
                <ChefLayOut {...this.props}/>
            </div>
        }
        else{
            layout=
            <div>
                <UserLayOut {...this.props}/>
            </div>
        }

        return(
            <div>
                <div>{layout}</div>
            
<div className='body'>
<h2 style={{color:"rgb(245, 80, 3)", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", fontSize:34, marginTop:80}}>{this.state.name}'s meals</h2>

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
                                    onClick={()=>this.src={savedFull}}
                                    className='saveCard'
                                    src={savedEmpty}/>
                                    
                            </IconButton>
                            </CardActions>
                            
                        
                        </CardActionArea>



                        </Card>
                    
                )}
                 
            </div>

</div>
                

        )
    }
}

export default Occasion;
