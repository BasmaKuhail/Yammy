import React, {Component} from 'react';
import * as firebase from 'firebase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import back from '../gray.png';
import back1 from '../back.svg'


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

        this.list(); 

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User logged in already or has just logged in.
              console.log(user.uid);
              this.setState({uid:user.uid});
              console.log(this.state.uid);
            } else {
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
                    me.setState(favMeals)

                });
            })
        });

        console.log(currentUserMealId);
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
        learnMore=(clickedMealId)=>{
            this.props.history.push('/meal', {id: clickedMealId})
         }
    render(){
        const {favMeals}= this.state;
        console.log(this.state.favMeals); 


        return(

            <div className='contaner'>
                <img 
                    src={back} 
                    style={{width:1366, height:60 }}
                />
                
                <div style={{padding:14}}>
                    <h2>My favourites</h2>
                   
                    <img 
                        className='backimg' 
                        style={{
                            width:30, 
                            position:'absolute' ,
                            marginLeft: 10,
                            left:0,
                            top:10}} 
                            src={back1} onClick={()=>this.props.history.push("/cheif")}/>
                   
            
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
                

        )
    }
}

export default favouriteChef;