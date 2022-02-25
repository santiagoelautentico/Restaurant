import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='title col-6'>
                        Menu
                    </div>
                    <div className='search col-6'>
                        <input className="inputs" type={"text"} placeholder='Busqueda'></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;