import React, { Component } from 'react';

class Plato extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='title col-12'>
                        Menu
                    </div>
                    <div className='card col-4 cartaMenu'>
                        <div className='titlePlate'>
                            Nombre del plato
                        </div>
                        <div className='imagenPlato'>
                            <img src={URL} alt='plato'></img>
                        </div>
                        <div className='caracteristicas'>
                            caracteristicas
                        </div>
                        <div className='botones'>
                            <button className='button1 col-6'>agregar</button>
                            <button className='button2 col-6'>eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Plato;