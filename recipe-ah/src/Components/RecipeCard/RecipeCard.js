import React from 'react';
import Recipe from '../Recipe/Recipe';

export default function RecipeCard(props) {
    const {recipe} = props;
    return(
        <div className="recipeCard">
            <h2> Recipe Card</h2>
            { recipe && (
            <React.Fragment>
                <h2>{recipe.strMeal}</h2>
                <img src={recipe.strMealThumb} />
                </React.Fragment>

)}
        </div>
    )
}