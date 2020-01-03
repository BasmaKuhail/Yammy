import React  ,{Component}from 'react';
import './HomePage.css';

  class Home extends Component{
    render(){

      console.log(this.props)
  return (
    <div className="Home">

      <div  class="container">
        <img className='bigimg' 
        src={'https://images.pexels.com/photos/616404/pexels-photo-616404.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
        />
        <p class="overlay">
          about us about usabout usabout usabout usabout usabout usabout usabout usabout us
          about usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usabout usab
          out usabout usabout usabout usabout usabout usabout usabout usabout us
        </p>
      </div>

      <div className="Top-left"> 
        <a href="https://www.facebook.com/basmakuhail2003">
          <img className='image' src={'https://www.facebook.com/images/fb_icon_325x325.png'} />
        </a>

        <a href="https://www.facebook.com/basmakuhail2003">
          <img className='image' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png'} /> 
        </a>

        <a href="https://www.facebook.com/basmakuhail2003">
          <img className='image' src={'https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale'} />
        </a>

   
        <button className="button" onClick={()=>this.props.history.push('/add')}>Add Meal</button>
      </div>

      <div className='centered'>
        <h1> Yammy!</h1>
        <input className='input' placeholder=" 🔍 serch for meal"></input> <button>search</button>
        <img className='image' src={'https://img.icons8.com/pastel-glyph/2x/search.png'} />
        <div className="buttons">
          <button className='filter'>breakfast</button>
          <button className='filter'>lunch</button>
          <button className='filter'>diner</button>
          <button className='filter'>vage</button>

        </div>
      </div>
    </div>
       
  );
    }
}

export default Home;