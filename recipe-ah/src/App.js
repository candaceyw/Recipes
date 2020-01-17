import React, {useState, useEffect} from 'react';
import './App.scss';
import {Route}  from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Header from './Components/Header/Header';
import Recipe from './Components/Recipe/Recipe';
import Axios from 'axios';

function App() { 
    const [recipe, setRecipe] = useState([])
    useEffect(() => {
      Axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => setRecipe(res.data.meals[0]))
      .catch(err => console.log(err))
    }, [])

    return(
    <React.Fragment>
      <Route path="/" component={Header}/>
      <Route exact path="/">
          <Landing recipe={recipe}/>
      </Route> 
      <Route path="/recipe/:id">
          <Recipe />
      </Route> 
      <p>Recipe App </p>
    </React.Fragment>
  );
}

export default App;
