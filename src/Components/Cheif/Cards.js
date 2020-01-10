import React, { Component } from 'react';
import * as firebase from 'firebase';
import './Cards2.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardMedia from '@material-ui/core/CardMedia';


class Cards extends Component{

    state={
      meals:[]
    }

    componentDidMount(){
        const db = firebase.firestore();
        const {meals} = this.state;
    
        db.collection("meals").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // console.log(doc.id, " => ", doc.data());
                meals.push(doc.data())
                
            });
        });
    }
    
    render(){
        console.log(this.state.meals)

        const {meals}= this.state;

        
        return(

                
                <div>

                    <Card className='card'>
                        <CardActionArea>
                            <CardContent>
                            <CardHeader 
                                title= 'fg4tb5'
                            />

                            <CardMedia
                                className='media'
                                image=''
                            />

                            </CardContent>

                        </CardActionArea>

                        <CardActions>


                            <Button size="small" color="primary"
                             onClick={()=>this.props.history.push('/meal')}>
                            Learn More
                            </Button>

                            <IconButton aria-label="add to favorites" className='expandOpen'>
                                <FavoriteIcon />
                            </IconButton>
                        </CardActions>

                    </Card>
                    
                
                    </div>
                


            
        );

    
    }

}

export default Cards;