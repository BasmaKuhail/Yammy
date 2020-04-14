import React, {Component} from 'react';
import Cards from '../Home/CardHome';
import * as firebase from 'firebase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';


class Favourite extends Component{

    state={
        favMeals:[],
        uid:"",
        currentUserMealId:[]
    }


    componentDidMount(){

        const db= firebase.firestore();
        let me = this;
        const {currentUserMealId, favMeals}= this.state; 

        this.list(); 

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
                    favMeals.push(doc.data());
                    me.setState(favMeals);
                    console.log(favMeals)

                });
            })
        });

        console.log(currentUserMealId); //it's an arrray of the fav meals' id that the current user has 
        });      
    }


        list=()=>{

            const db= firebase.firestore();
            let me = this;
            const {currentUserMealId, favMeals}= this.state; 

            currentUserMealId.forEach(id => {
                console.log(id);
                db.collection('meals').doc(id)
                .get()
                .then((doc)=>{
                        console.log(doc.data());
                        favMeals.push(doc.data());
                        me.setState(favMeals)
    
                    });
                });
        }
    
    render(){
        const {favMeals}= this.state;
        console.log(this.state.favMeals); 


        return(

            // <div>
            // <button onClick={this.list}></button>
            // </div>

            <div className='TheCard'>
                {favMeals.map((meal)=>

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
                

        )
    }
}

export default Favourite;
