import React  ,{Component}from 'react';
class aboutUs extends Component{
    render(){
        return(
            <div>
                <img style={{width:1350, height:667, opacity:0.6}}
                src={"https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}/>  
                 <text style={{ fontSize:30,
  color:'white',
  marginBottom:5,
  position: 'absolute',
  top:300,
  left: 100,}}> this site helps you to cook and share cooking with people all over the world</text>
                <h1 style={{ fontSize:80,
  color:'white',
  marginBottom:5,
  position: 'absolute',
  top: 0,
  left: 100,}}> Wasfa!</h1>


                <text></text>

            </div>
        )
    }
}
export default aboutUs;