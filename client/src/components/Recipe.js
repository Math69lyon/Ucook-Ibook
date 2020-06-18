import React from 'react';
<<<<<<< HEAD
import style from './recipe.module.css';
=======
<<<<<<< HEAD
>>>>>>> 7e91b115fc548991abc87937d716619b84e59eb6

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <div className='h1'>
            <h1>{title}</h1>
            </div>
            <ol>{ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
<<<<<<< HEAD
=======
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
>>>>>>> 7e91b115fc548991abc87937d716619b84e59eb6
            ))}
            </ol>
            <div className='calories'>
                <h3>Calories</h3>
            </div>
            <p> {calories}</p>
            <img className={style.image} src={image} alt="" />
<<<<<<< HEAD
=======
>>>>>>> fa16a86f9a6b3dce012ac6e96ecae19173b7ddbf
>>>>>>> 7e91b115fc548991abc87937d716619b84e59eb6

        </div>
    );
}

export default Recipe;