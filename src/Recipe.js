import React from "react";

const Recipe = ({ recipe }) => {
    const { title, image, url } = recipe;
    return (
        <div className="col-md-3 col-sm-12">
            <div className="card cartaMenu">
                <div className="containerImage">
                    <img src={image} className="imageFood"></img>
                </div>
                <div className="title">
                    {title}
                </div>
                <div className="col-12 botones">
                    <button className="col-6 boton1">Ver detalles</button>
                    <button className="col-6 boton2">Eliminar</button>
                </div>
            </div>
        </div>
    )
}
export default Recipe;