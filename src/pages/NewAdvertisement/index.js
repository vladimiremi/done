import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import logo from '../../assents/logo.png';

export default function NewAdvertisement(){

    return(
        <div className="done">
            <div className="logo">
                <img src={logo} alt="Done"/>
            </div>
            <h2>Vamos vender esse feijão</h2>            
            <form className="inputs">
                    <input className="input" type="input" placeholder="Quantos kg"/>
                    <input className="input" type="input" placeholder="Qual feijão"/>
                    <Link className="button" to="/user">Anunciar</Link>
            </form>
            
        </div>
    );
}


