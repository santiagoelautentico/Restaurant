import axios from "axios";
import React, { Component } from "react";
import logo from "../src/restaurant.png";
import Menu from "./Plato"
import { Apiurl } from "./services/apirest"

class Login extends Component {

    constructor(props){
        super(props);
    }

    state = {
        form: {
            "usuario": "",
            "password": ""
        },
        error: false,
        errormsg: ""
    }

    manejadorSubmit = e => {
        e.preventDefault();
    }

    manejadorChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    manejadorBoton = () => {
        let url = Apiurl + "auth"
        axios.post(url, this.state.form)
            .then( response =>{
                if(response.data.status === "ok"){
                    localStorage.setItem("token", response.data.result.token);
                    this.props.history.push("./Menu");
                }else{
                    this.setState({
                        error : true,
                        errormsg : response.data.result.error_msg
                    })
                }
            })
    }

    render() {
        return (
            <div className="container-fluid dad">
                <div className="card carta">
                    <div className="logo"><img src={logo} alt="logo" className="image" /></div>
                    <div className="title">
                        Restaurant App
                    </div>
                    <div className="lineCenter">
                        <hr className="line"></hr>
                    </div>
                    <form action="" autocomplete="off" onSubmit={this.manejadorSubmit}>
                        <label className="nameForm">Nombre de Usuario</label><br />
                        <input className="inputs" type={"text"} name="usuario" autocomplete="off" onChange={this.manejadorChange}></input><br /><br />
                        <label className="nameForm">Contraseña</label><br />
                        <input className="inputs" type={"password"} name="password" onChange={this.manejadorChange}></input><br /><br />
                        <button className="button" onClick={this.manejadorBoton}>Iniciar Sesion</button>
                    </form>
                    {this.state.error === true &&
                        <div class="alert alert-danger alert" role="alert">
                             {this.state.errormsg}
                        </div>
                    }

                </div>
            </div>
        )
    }
}
export default Login;