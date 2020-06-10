import React, {Component} from 'react';
import * as firebase from 'firebase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import chef from '../chef.svg';
import ChefLayOut from '../chefLayOut'



class favouriteChef extends Component{

    state={
        favMeals:[],
        uid:"",
        currentUserMealId:[]
    }

    componentDidMount(){

        const db= firebase.firestore();
        let me = this;
        const {currentUserMealId, favMeals}= this.state; 


        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User logged in already or has just logged in.
              console.log(user.uid);
              this.setState({uid:user.uid});
              console.log(this.state.uid);
            } else {
                console.log("not logged in ");

              // User not logged in or has just logged out.
            };




        db.collection("mealUserId").where("currentUserUid", "==",this.state.uid)
        .get()
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc)=> {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                currentUserMealId.push(doc.data().mealId);
                me.setState(currentUserMealId)
        });
        }).then(()=>{
            console.log(currentUserMealId);
            currentUserMealId.forEach((id)=>{
                console.log(id);
                db.collection('meals').doc(id)
            .get()
            .then((doc)=>{
                    console.log(doc.data());
                    const fetchedMealData = {
                      id: doc.id,
                      ...doc.data()
                    };
                    favMeals.push(fetchedMealData);
                    me.setState(favMeals);
                    console.log(favMeals)

                });
            })
        });

        });      
    }
     learnMore=(clickedMealId)=>{
            this.props.history.push('/meal', {id: clickedMealId})
         }


    render(){
        const {favMeals}= this.state;
        console.log(this.state.favMeals); 


        return(
            
            
            <div>
               <ChefLayOut {...this.props}/>

<div className="main">
<h2 style={{color:"rgb(245, 80, 3)",marginTop:80, fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", fontSize:34}}>My favourite meals</h2>   
         <div onClick={()=>this.props.history.push('/cheif')}>
         <img 
           src={chef}
           className='user'
         /> 
         </div>
         <div/>
                    <div>
         
                         {favMeals.map((meal)=>
    
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
</div>



        )
    }
}

export default favouriteChef;