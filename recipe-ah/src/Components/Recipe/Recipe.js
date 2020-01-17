import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Recipe() {
    const { id } = useParams()
    const {current, setCurrent} = useState([])
    console.log(id);

    useEffect(() => {
        
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => setCurrent(res.data.meals[0]))

    }, [id])

    return(
        <React.Fragment>
            {current && 
        <div>
            <h2>{current.strMeal}</h2>
            <p>{current.strCategory}</p>
            <iframe src={current.strYoutube} title={current.strMeal}/>
            <p>{current.strInstructions}</p>

        </div>
       } </React.Fragment>
     )
}

export default Recipe;