import React, {Component} from 'react';
import './meal.css'
import * as firebase from 'firebase';
import back from '../gray.png';
import ChefLayOut from '../chefLayOut';
import UserLayOut from '../userLayOut'



class Meal extends Component{
    state={
        meal:{},
        vegetarian:null,
        chefId:"",
        chefName:"",
        chef: null,
        userType:"",
        space:"  ",

      }
  
      componentDidMount(){
        const db = firebase.firestore();

        

        const { state } = this.props.history.location;
        console.log('mealId', state.id);
          const {meal} = this.state;
          let me = this;
          db.collection('meals').doc(state.id)
                .get()
                .then((doc)=>{
                        console.log(doc.data());
                        const chefId= doc.data().usid;
                        console.log(chefId)
                        this.setState({chefId:chefId})
                        this.setState({meal:doc.data()})
                        const vegetarian= doc.data().veg
                        
                if (vegetarian=="Veg"){
                    this.setState({vegetarian:true})
                }
                else{
                    this.setState({vegetarian:false})

                }
                }).then((doc)=>{
                    db.collection('users').doc(this.state.chefId)
                    .get()
                    .then((doc)=>{
                        console.log(doc.data());
                        this.setState({chefName: doc.data().Username})
                    });
                }).then(()=>{

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

                    });

      }

    render(){
        const {meal:item, chefName, chef,space}= this.state;
        console.log(this.state.meal);
        console.log(chef)
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
        let vegInfo
        if(this.state.vegetarian){
    vegInfo= <div style={{fontWeight:"bold", fontSize:22, color:"#fd6700"}}>It's suitable for vegans</div>
        }else{
            // vegInfo= <div>It isn't suitable for vegans</div>
          
        }

        return(

            <div>

            <div>{layout}</div>

            <div  className='container'>
            <div>


               
                <div className="form">                
                    <div>
                        <div className="intro">
                        <div className="introText">
                        <h1 className='mealTitle' >{item.mealName}</h1>
                        <div style={{display:"flex", flexDirection:"row"}}>        
                        <h2 className='mealSubTitle'>By:</h2>
                        <h2 className='mealSubTitle'>{chefName}</h2>
                        </div>
                        </div>
                            <img src={item.image} className="mealImg"/>   
                        </div>
                        <hr/>                                 


                        <div className="div">
                            <p className='Title'> Ingerdients:  </p>
                            <p className='contents' >{item.mealContents}</p>
                        </div>
                        <div style={{flexDirection:"row"}}>
                            <p className='Title'>Recipe:</p>
                            <p className='contents'>{item.recipe}</p>
                        </div>
                        <div style={{flexDirection:"row"}}>
                            <p  className='Title'>Cooking and preperation time:</p>
                            <p className='contents'>{item.timeNeed}</p>
                        </div>
                        <div style={{flexDirection:"row"}}>
                            <p className='Title' >It's eaten as:</p>
                            <p className='contents'>{item.TimeToEat}</p>
                        </div>
                        <div style={{flexDirection:"row"}}>
                            <p className='Title' >It's good for occasions like:</p>
                            <p className='contents'>{item.occasions}</p>
                        </div>
                        <div style={{flexDirection:"row"}}>
                            <p className='Title' >It's an:</p>
                            <p className='contents'>{item.region} region</p>
                        </div>

                        <div>{vegInfo}</div>                        
                        
                    </div>
                    

               </div>
               </div>

            </div>
            </div>
        );
    }

}

export default Meal;