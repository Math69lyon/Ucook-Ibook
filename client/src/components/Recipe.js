import React from 'react'
import style from './recipe.module.css'
import Button from '@material-ui/core/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


const btn = {
  backgroundColor: "#80deea",
  color: "#006064",
  '&:hover': {
      color: '#80deea',
      borderColor: '#80deea',
      backgroundColor: '#006064',
      textTransform: "uppercase"
  }
}

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
                <button style={btn}>
                    <Link to="/homeConnect">
                        <Button
                          variant="outlined"
                        >
                            Comments
                        </Button>
                    </Link>
                </button>
        </div>
    )
}
export default Recipe