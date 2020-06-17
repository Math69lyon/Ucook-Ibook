import React from 'react';
<<<<<<< HEAD

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div>
            <h1>{title}</h1>
            <ol>{ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}</ol>
            <p>{calories}</p>
            <img src={image} alt="" />
            
=======
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <div className='h1'>
            <h1>{title}</h1>
            </div>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <div className='calories'>
                <h3>Calories</h3>
            </div>
            <p> {calories}</p>
            <img className={style.image} src={image} alt="" />
>>>>>>> fa16a86f9a6b3dce012ac6e96ecae19173b7ddbf

        </div>
    );
}

export default Recipe;