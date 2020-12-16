import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assents/logo.png';

export default function Register(){

    return(
        <div className="done">
            <div className="logo">
                <img src={logo} alt="Done"/>
            </div>  
                      
            <form className="inputs">
                    <input className="input" type="input" placeholder="Seu nome completo"/>
                    <input className="input" type="input" placeholder="Seu apelido"/>
                    <input className="input" type="input" placeholder="Localidade"/>
                    <input className="input" type="input" placeholder="Whatsapp"/>
                    <input className="input" type="password" placeholder="Senha"/>
                    <Link className="button" to="/">Registrar</Link>
            </form>
                 

        </div>
    );
}


