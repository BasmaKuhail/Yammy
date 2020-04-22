import React  ,{Component} from 'react';
import './add.css'
import * as firebase from 'firebase';
import facebook from '../facebook.svg';
import instagram from '../instagram.svg'
import twitter from '../twitter.svg';
import back from '../gray.png';
import search from '../search.svg'
import chef from '../chef.svg';
import more from '../more.svg';
import saved from '../saved1.svg';
import logout from '../logout .svg';
import axios from 'axios';



class AddMeal extends Component{
    state={
        uid:"",
        selectedFile: null,
        occasions:[],
        eatTime:[],
        // checked:false

    }
    componentDidMount(){
        const db = firebase.firestore();

        db.collection("meals").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().first}`);
            });
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              // User logged in already or has just logged in.
              console.log(user.uid);
              this.setState({uid:user.uid})
            } else {
              // User not logged in or has just logged out.
            };
          });
        
    }

   
 
    handleChange = (e)=>{

        let key = e.target.name;

        this.setState({
            [key]:e.target.value
        })

    }

    handleChangeCheckbox=(e)=>{
        console.log(e.target.checked);
        let checked= e.target.checked;
        const {occasions}= this.state
        if (checked==true){
            if(occasions.includes(e.target.name)){

            }
            else{
                occasions.push(e.target.name)
                this.setState(occasions)
                
            }
        }
        else{
            if(occasions.includes(e.target.name)){
                const filter= occasions.filter(item => item !== e.target.name)
                this.setState({occasions:filter})

            }
            else{

                
            }


        }


        console.log(occasions)

        
    }

    handleChangeCheckboxTime=(e)=>{
        console.log(e.target.checked);
        let checked= e.target.checked;
        const {eatTime}= this.state
        if (checked==true){
            if(eatTime.includes(e.target.name)){

            }
            else{
                eatTime.push(e.target.name)
                this.setState(eatTime)
                
            }
        }
        else{
                const filter= eatTime.filter(item => item !== e.target.name)
                this.setState({eatTime:filter})



        }


        console.log(eatTime)

        
    }

    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
      }

      uploadHandler = () => {
        const formData = new FormData()
        formData.append(
          'image',
          this.state.selectedFile,
          this.state.selectedFile.name
        )
        axios.post('my-domain.com/file-upload', formData)
      }

    logout=()=>{
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
        });
      }

    AddMeal = ()=>{
        const db = firebase.firestore();

        const {name , contents , recipe , time ,veg, image, uid, occasions, eatTime, servers, region, clasifiction} = this.state;
      

        console.log(this.state)
        db.collection("meals").add({
            mealName: name,
            mealContents: contents,
            recipe: recipe,
            timeNeed: time,
            veg: veg,
            image: image,           
            usid :uid,
            occasions: occasions,
            TimeToEat:eatTime,
            servers:servers,
            region:region,
            clasifiction:clasifiction, 
        })
        .then( (docRef) =>{
            this.props.history.push('/myMeals')

        })



    }

    

    render(){


        return(
            <div>
                <img 
          src={back} 
          style={{width:1366, height:60 }}
        />
          
          <img 
          className="savedChef" 
          src={saved}
          onClick={()=>this.props.history.push('/favourite')}
        />
          <div style={{flexDirection:"row"}}>
          <button className='searchButton'>
            <img style={{width:20,height:20}} src={search}/>
          </button>
          <input className='search' type="text" name="search" placeholder="Search.."/>
        
          <img 
            src={chef}
            className='user'
          />

          <img
          className='logout'
          src={logout}
          onClick={()=>this.logout()}
          />

          <a href="https://www.facebook.com/basmakuhail2003">
            <img 
              src={facebook}
              className='facebookUser'/> 
          </a>

          <a href="https://www.facebook.com/basmakuhail2003">
            <img 
              src={instagram}
              className='instagramUser'/>
          </a>

          <a href="https://www.facebook.com/basmakuhail2003">
            <img 
              src={twitter}
              className='twitterHome'/>               
          </a>

            <button 
              className="buttonMyMeals" 
              onClick={()=>this.props.history.push('/myMeals')}>
                My Meals
            </button>
          </div>
          <div className="bg">

            <div className="form">
            <h1 className="title">Adding meal form </h1>
            <h1 className="subTitle">Share your meals with us!</h1>

            <div>
                <input 
                    className="inputAdd"  
                    name="name" 
                    placeholder ="Meal's name"
                    onChange={this.handleChange}
                    required
                /> 

            </div>
            <div>
                <input 
                    className="inputAdd2" 
                    type="number" 
                    name="time" 
                    placeholder ="Prepartion and cooking time(in minutes)"
                    onChange={this.handleChange}
                    required
                />
                <input 
                    className="inputAdd2"
                    type="number"  
                    name="servers" 
                    placeholder ="It servers(people's number)"
                    onChange={this.handleChange}
                    required
                /> 
                 
            </div>
            
            <div>
                <textarea 
                    className="inputAdd"  
                    name="contents" 
                    placeholder ="The ingerdients and the quantities"
                    onChange={this.handleChange}
                    required
                >
                </textarea>

            </div>
            <div>
                <textarea 
                    className="inputAdd"  
                    name="recipe" 
                    placeholder ="The recipe"
                    onChange={this.handleChange}
                    required
                > 
                </textarea> 

            </div>
            <div>
                <input 
                    className="inputAdd"  
                    name="image"
                    type="text"
                    placeholder ="Drop the meal's image url"
                    onChange={this.handleChange}
                    required
                /> 
 
                
            </div>
            <div className="options">
                    <text className='text1Add'>Is this meal suitable for vegterians?</text>

                    <input 
                        type="radio" 
                        name='veg' 
                        onChange={this.handleChange} 
                        value="Veg"
                        required
                    />
                    <text className='text4Add'>Yes</text>
                    
                    <input 
                        type="radio" 
                        name='veg' 
                        onChange={this.handleChange} 
                        value="non-veg"
                        required
                    />
                    <text className='text4Add'>No</text>
                    
                </div>

                <div className="options">
                    <text className='text1Add'>This dish is:</text>

                    <input 
                        type="radio" 
                        name='region' 
                        onChange={this.handleChange} 
                        value="west"
                        required
                    />
                    <text className='text4Add'>Westren</text>
                    
                    <input 
                        type="radio" 
                        name='region' 
                        onChange={this.handleChange} 
                        value="east"
                        required
                    />
                    <text className='text4Add'>Eastren</text>

                    <input 
                        type="radio" 
                        name='region' 
                        onChange={this.handleChange} 
                        value="east"
                        required
                    />
                    <text className='text4Add'>Asian</text>
                    
                </div>

                <div className="options" >
                    <text className='text1Add'>It's eaten as a:</text>
                    <input
                    name="breakfast"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckboxTime}
                    required />
                    <text className='text4Add'>breakfast</text>


                    <input
                    name="lunch"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckboxTime} 
                    required/>
                   <text className='text4Add'
                  >lunch</text>

                    <input
                    name="dinner"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckboxTime}
                    required />
                    <text className='text4Add'>dinner</text>

                    <input
                    name="snak"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckboxTime}
                    required />
                    <text className='text4Add'>snak</text>

                </div>

                <div style={{display:"flex", flexDirection:"row"}}>

                <div className="clasify" >
                    <text className='text1Add'>This meal is type of:</text>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="clasifiction"
                    type="radio"
                    value="Salads"
                    checked={this.state.salad}
                    onChange={this.handleChange}
                    required />
                    <text className='text4Add'>Salads</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="clasifiction"
                    type="radio"
                    value="Main meals"

                    checked={this.state.mainMeal}
                    onChange={this.handleChange} 
                    required/>
                   <text className='text4Add'>Main meals</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="clasifiction"
                    value="Deserts"

                    type="radio"
                    checked={this.state.desert}
                    onChange={this.handleChange} 
                    required/>
                    <text className='text4Add'>Deserts</text>
                    </div>

                    <div className="oneClasify">                    
                    <input
                    className="btn"
                    name="clasifiction"
                    type="radio"
                    value="Drinks"

                    checked={this.state.drink}
                    onChange={this.handleChange}
                    required />
                    <text className='text4Add'>Drinks</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="clasifiction"
                    type="radio"
                    value="Starters"

                    checked={this.state.starter}
                    onChange={this.handleChange}
                    required />
                    <text className='text4Add'>Starters</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="clasifiction"
                    type="radio"
                    checked={this.state.soap}
                    onChange={this.handleChange}
                    value="Soup"

                    required />
                    <text className='text4Add'>Soup</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="clasifiction"
                    type="radio"
                    checked={this.state.pastry}
                    onChange={this.handleChange} 
                    value="Pastries"
                    />
                    <text className='text4Add'>Pastries</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="clasifiction"
                    type="radio"
                    checked={this.state.sandwich}
                    onChange={this.handleChange}
                    value="Sandwiches"
                    />
                    <text className='text4Add'>Sandwiches</text>
                    </div>

                    <div className="oneClasify">                   
                    <input
                    className="btn"
                    name="clasifiction"
                    type="radio"
                    checked={this.state.seaFood}
                    onChange={this.handleChange} 
                    value="Sea food"
                    />
                    <text className='text4Add'>Sea food</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="clasifiction"
                    type="radio"
                    value="sauce"

                    checked={this.state.sauce}
                    onChange={this.handleChange} />
                    <text className='text4Add'>Sauce</text>
                    </div>

                </div>

{/* ------------------------------------------------------------------------------------------ */}

                    <div className="clasify2" >
                    <text className='text1Add'>This meal is suitable for occasions like:</text>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="birthday"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckbox} />
                    <text className='text4Add'>Birthday</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="picnic"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckbox} />
                   <text className='text4Add'>Picnic</text>
                    </div>

                   

                    <div className="oneClasify">                    
                    <input
                    className="btn"
                    name="ThanksGiving"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckbox} />
                    <text className='text4Add'>Thanks Giving</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="Ramadan"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckbox} />
                    <text className='text4Add'>Ramadan</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="Eid"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckbox} />
                    <text className='text4Add'>Eid</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="foodParty"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckbox} />
                    <text className='text4Add'>Food party</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="Camping"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckbox} />
                    <text className='text4Add'>Camping</text>
                    </div>

                    <div className="oneClasify">                   
                    <input
                    className="btn"
                    name="Entertaining"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckbox} />
                    <text className='text4Add'>Entertaining</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="Chritmas"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckbox} />
                    <text className='text4Add'>Chritmas</text>
                    </div>

                    <div className="oneClasify">
                    <input
                    className="btn"
                    name="none"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={this.handleChangeCheckbox} />
                    <text className='text4Add'>None</text>
                    </div>

                </div>
                </div>
                <button className="Add" onClick={this.AddMeal}>Add meal</button>
            </div>

        </div>
    </div>
        )
    }

}

export default AddMeal;