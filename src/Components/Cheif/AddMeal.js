import React  ,{Component} from 'react';
import './AddMeal.css'
import * as firebase from 'firebase'


class Add extends Component{
    state={
    }
    componentDidMount(){
        const db = firebase.firestore();

        db.collection("meals").get().then((querySnapshot) => {
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

        const {name , contents , recipe , time ,type, image} = this.state;
      

        console.log(this.state)
        db.collection("meals").add({
            mealName: name,
            mealContents: contents,
            recipe: recipe,
            timeNeed: time,
            type: type,
            image: image,

        })
        .then( (docRef) =>{
            this.props.history.push('/myMeals')

        })


    }

    

    render(){


        return(
            <div className='base-containerAdd'>
                <img className='bigimg' 
                    src={'https://images.pexels.com/photos/616412/pexels-photo-616412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
                />
                <div className='addMeal'>
                <h1 className="headerAdd" >Add Meal</h1>
                <p className='text1Add'>Hi Cheif, it's nice to see you again!</p>
                
                <div className="form-groupAdd">
                    <input 
                        className="inputAdd"  
                        name="name" 
                        placeholder =" meal name"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input 
                        className="inputAdd" 
                        name='contents'
                        placeholder=" meal contents" 
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input 
                        className="inputAdd"  
                        name= 'recipe' 
                        placeholder=" recipe" 
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input 
                        className="inputAdd" 
                        name='time'
                        placeholder=" time needed" 
                        onChange={this.handleChange
                    }/>
                </div>
                
                
                <div>
                    <input 
                        className="inputAdd" 
                        name='image'
                        placeholder=" image addres" 
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <text className='text1Add'>meal type:</text>

                    <text className='text4Add'>vage</text>
                    <input 
                        type="radio" 
                        name='type' 
                        onChange={this.handleChange} 
                        value="vaga"
                    />

                    <text className='text4Add'>not</text>
                    <input 
                        type="radio" 
                        name='type' 
                        onChange={this.handleChange} 
                        value="not"
                    />
                </div>
                <div>
                    <button className='yellowButtonAdd' onClick={this.AddMeal}>add Meal</button>
                </div>
                </div>


                
                
            </div>
        )
    }

}

export default Add;