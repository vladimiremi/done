import React from 'react';
import './styles.css';
import logo from '../../assents/logo.png';

export default function Logon(){

    return(
        <div className="done">
            <div className="logo">
                <img src={logo} alt="Done"/>
            </div>            
            <div className="logon">
                    <input className="input" type="input" placeholder="Whatsapp"/>
                    <input className="input" type="number" placeholder="Senha"/>
            </div>
            <a className="button" href="/#">Entrar</a>
        </div>
    );
}


