import React, { Component } from 'react';
import comida from "./plate-basil-cherry-gourmet-menu.jpg";

class Plato extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='title col-12'>
                        Menu
                    </div>
                    <div className='card col-md-4 col-sm-12 cartaMenu'>
                        <div className='imagenPlato'>
                            <img className="imgP" src={comida} alt='plato'></img>
                        </div>
                        <div className='titlePlate'>
                            Nombre del plato
                        </div>
                       
                        <div className='caracteristicas'>
                            caracteristicas
                        </div>
                        <div className='botones'>
                            <button className='button1 col-6'>Ver detalles</button>
                            <button className='button2 col-6'>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Plato;