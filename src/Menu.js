import React, { useState } from 'react';
import Axios from "axios";
import logoMenu from "./restaurant-menu.png";

const Menu = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState("");

    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}`;

    const getData = async () => {
        const result = await Axios.get(url);
        setResults(results);
        console.log(result);
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
                    <form className='form' onSubmit={onSubmit}>
                        <input type="text" placeholder='Busca tu plato ideal' autoComplete='off' onChange={onChange} value={query} />
                        <input type="submit" value="search" />
                    </form>
                </div>
            </header>

            <div className='row'>
                <div className='col-md-4 col-sm-12'>
                    {results !== [] && results.map(result => <h2>{results.title}</h2>)}

                </div>
            </div>
        </div>
    )
}

export default Menu;