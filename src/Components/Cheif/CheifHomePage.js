import React  ,{Component}from 'react';
import './CheifHomePage.css';
import Cards from '../Card/Card.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import savedFull from '../savedFull.svg';
import savedEmpty from '../savedEmpty.svg';
import desert from '../sweet.svg';
import ChefLayOut from '../chefLayOut'

import chef from '../chef.svg';
import * as firebase from 'firebase';



  class Cheif extends Component{

    state={
      meals:[],
      uid:"", 
      mealId:"",
      searchText:""
    }



    logout=()=>{
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
    }

    eattimeMeals=(name)=>{
      console.log(name);
      this.props.history.push('/eatTime', {id: name})

    }

    occasion=(name)=>{
      console.log(name);
      this.props.history.push('/occasion', {id: name})

    }

    type=(name)=>{
      console.log(name);
      this.props.history.push('/type', {id: name})

    }

    vegan=()=>{
      this.props.history.push('/vegan')

    }

    search=(e)=>{
      this.setState({searchText:e.target.value})      
    }
    ClickSearch=()=>{
      this.props.history.push('/result', {id: this.state.searchText})

    }
    render(){

      const {meals} = this.state;
      console.log(this.props)
    return (
<div>
       <ChefLayOut {...this.props}/>

<div className="main">
<div className="all">
  <div>
<h2 style={{color:"rgb(245, 80, 3)", fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif", fontSize:34}}>All meals</h2>
</div>
<Cards {...this.props}/>
</div>
</div>
        </div>
       
  );
    }
}

export default Cheif;