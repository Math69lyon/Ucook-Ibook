import React, { Component } from 'react'
import '../App.css';
import Component1 from '../components/Component1';
import Component2 from '../components/Component2';
import Component3 from '../components/Component3';
import Component4 from '../components/Component4';

<<<<<<< HEAD
=======
<<<<<<< HEAD
const Home = () => {
    const APP_ID = "39194b34";
    const APP_KEY = "d9b9ed29c355e57b53807408c9bb0a7a";

    const [recipes, setRecipes] = useState([]);

    const [search, setSearch] = useState('');

    const [query, setQuery] = useState('pasta');

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async() => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');

    }

    return ( <
        div className = "App" >
        <
        form onSubmit = { getSearch }
        className = "search-form" >
        <
        input className = "search-bar"
        type = "text"
        value = { search }
        onChange = { updateSearch }
        /> <
        button className = "search-button"
        type = "submit" > Search < /button> <
        /form> {
            recipes.map(recipe => ( <
                Recipe key = { recipe.recipe.label }
                title = { recipe.recipe.label }
                calories = { recipe.recipe.calories }
                image = { recipe.recipe.image }
                ingredients = { recipe.recipe.ingredients }
                />
            ))
        } <
        /div>

    );
};

export default Home;
=======

const Home = () => {
  const APP_ID = "39194b34";
  const APP_KEY = "d9b9ed29c355e57b53807408c9bb0a7a";
>>>>>>> 7e91b115fc548991abc87937d716619b84e59eb6



class Home extends Component {
  render() {
    return (

      /*
      <div className="Image-Backgroun">
      <img src="/images/b2pDhvm.jpeg" alt="" />
    </div>
     */
      <div className="App">
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
      </div>  
      );
    }
  
}


<<<<<<< HEAD
export default Home
=======
export default Home;
>>>>>>> fa16a86f9a6b3dce012ac6e96ecae19173b7ddbf
>>>>>>> 7e91b115fc548991abc87937d716619b84e59eb6
