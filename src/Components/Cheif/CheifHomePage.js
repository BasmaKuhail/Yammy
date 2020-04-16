import React  ,{Component}from 'react';
import './CheifHomePage.css';
import Cards from '../Card/Card.js'
import facebook from '../facebook.svg';
import instagram from '../instagram.svg'
import twitter from '../twitter.svg'
import wasfa from '../wasfa.png'


  class Cheif extends Component{
    render(){

      console.log(this.props)
    return (
      <div >

          <img className='bigimg' 
            src={'https://images.pexels.com/photos/616412/pexels-photo-616412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
          />
          

          <div className="Top-left"> 
            <a href="https://www.facebook.com/basmakuhail2003">
              <img 
                className='imageLeft' 
                src={facebook} 
              />
            </a>

            <a href="https://www.facebook.com/basmakuhail2003">
              <img 
                className='imageLeft' 
                src={instagram} 
              /> 
            </a>

            <a href="https://www.facebook.com/basmakuhail2003">
              <img 
                className='imageLeft' 
                src={twitter} 
              />
            </a>

    
            <button 
              className="buttonAdd" 
              onClick={()=>this.props.history.push('/add')}>
                Add Meal
            </button>
            <button 
              className="buttonMyMeals" 
              onClick={()=>this.props.history.push('/myMeals')}>
                My Meals
            </button>
          </div>
          <img 
              className='yummyImgCheif'
              src={wasfa}
          />

          <div className='cards'>
            <Cards {...this.props}/>
          </div>
      </div>
       
  );
    }
}

export default Cheif;