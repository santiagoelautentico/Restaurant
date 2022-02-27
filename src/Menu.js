import React, { useState } from 'react';
import Axios from "axios";
import logoMenu from "./restaurant-menu.png";
import Recipe from './Recipe';
const Menu = () => {

    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);

    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}`;

    const getData = async () => {
        const Object = await Axios.get(url);
        setRecipes(Object.data.results);
        console.log(Object);
        setQuery("");

    };

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        getData();
    }

    return (
        <div className='container-fluid'>
            <header className='headerMenu'>
                <img src={logoMenu} alt="logo" className="image" />
                <div className='formulario'>
                    <form className='formulario' onSubmit={onSubmit}>
                        <input className='buscador' type="text" placeholder='Busca tu plato ideal' autoComplete='off' onChange={onChange} value={query}  />
                        <input className='botonFood' type="submit" value="search" />
                    </form>
                </div>
            </header>

            <div className='container-fluid foodContainer'>
                <div className='row'>
                    {recipes !== [] && recipes.map(recipe => <Recipe recipe={recipe} />)}
                </div>
            </div>
        </div>
    )
}

export default Menu;