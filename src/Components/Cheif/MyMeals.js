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
import back from '../gray.png';
import back1 from '../back.svg'
import more from '../more.svg'


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
                        console.log(doc.id, " => ", doc.data());
                        this.state.meals.push(doc.data());
                        me.setState(this.state.meals)

                });
        
                });

            });
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
                 <button 
              className="buttonAdd" 
              onClick={()=>this.props.history.push('/add')}>
                <img  className='more' src={more}/>
            </button>
            </div>
            </div>
                

        )
    }
}

export default MyMeals;