import React  ,{Component} from 'react';
import './AddMeal.css'
import * as firebase from 'firebase'


class Add extends Component{
    state={

    }
    componentDidMount(){
        const db = firebase.firestore();

        db.collection("Meals").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().first}`);
            });
        });
    }
  
    handleChange = (e)=>{

        let key = e.target.name;

        this.setState({
            [key]:e.target.value
        })

    }

    AddMeal = ()=>{
        const db = firebase.firestore();

        const {name , contents , recipe , time ,type} = this.state;
      

        console.log(this.state)
        db.collection("meals").add({
            mealName: name,
            mealContents: contents,
            recipe: recipe,
            timeNeed: time,
            type: type,

        })


    }
    render(){
    

        return(
            <div className='add'>
                <h1>Add Meal</h1>
                <div>
                <text className='text1'>meal name:</text>
                <input name="name" className="input1"  placeholder =" meal name"onChange={this.handleChange}/>
                </div>
                <div>
                <text  className='text2'>meal contents:</text><input className="input2" name='contents'
                 placeholder=" meal contents" onChange={this.handleChange}/>
                </div>
                <div>
                <text className='text3'>meal recipe:</text><input className="input3"  name= 'recipe' 
                placeholder=" recipe" onChange={this.handleChange}/>
                </div>
                <div>
                <text  className='text4'>time needed:</text><input className="input4" name='time'
                 placeholder=" time needed" onChange={this.handleChange}/>
                </div>
                
                <div>
                <text className='text1'>meal type:</text>
                <text className='text5'>vage</text><input type="radio" name='type' onChange={this.handleChange} value="vaga"></input>
                <text className='text5'>not</text><input type="radio" name='type' onChange={this.handleChange} value="not"></input>
                </div>
                <div>
                <button className='button1' onClick={this.AddMeal}>add Meal</button>
                </div>
            </div>
        )
    }mealName

}

export default Add;