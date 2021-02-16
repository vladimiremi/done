import React, {useState} from 'react';
import './styles.css';
import {useHistory} from 'react-router-dom';
import logo from '../../assents/logo.png';
import api from '../../services/api';
import Input from '../../components/Input/Input';

// import Select from 'react-select';

export default function Register(){

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [locality, setLocality] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const history = useHistory();

    // const options = [
    //     {value:2, label:2},
    //     {value:2, label:2},
    //     {value:2, label:2},
    //     {value:2, label:2},
    //     {value:2, label:2},
    //     {value:2, label:2},
    //     {value:2, label:2},
    //     {value:2, label:2},

    // ]



    async function handleRegister(e) {
        e.preventDefault();

        const dat = {
            name,
            nickname,
            locality,
            city,
            uf,
            whatsapp
        }

        const response = await api.post('agricultor', dat); //o primeiro parâmetro é a rota, o segundo é a variável que tem os dados a serem enviados
        console.log(response.data); //esse data aqui é uma propriedade do axios
        alert(`Seu ID de acesso:  ${response.data.id}`);//esse data.id é o que back envia como resposta depois de cadastrado
        localStorage.setItem('agricultorId', response.data.id);
        history.push('/logon');

    }

    return(
        <div className="done">
            <div className="logo">
                <img src={logo} alt="Done"/>
            </div>  
                      
            <form className="inputs" onSubmit={handleRegister}>
                    <input 
                        className="input" 
                        type="nome" 
                        placeholder="Seu nome completo"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Seu apelido"
                        value={nickname}
                        onChange={e => setNickname(e.target.value)}
                    />
                    <input 
                        className="input" 
                        type="bairro" 
                        placeholder="Localidade"
                        value={locality}
                        onChange={e => setLocality(e.target.value)}
                    />
                    <input 
                        className="input" 
                        type="cidade" 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    {/* <Select
                        className="input-select"
                        options={options}
                        placeholder="Tipo do Feijão"
                    /> */}
                    <input 
                        className="input" 
                        type="uf" 
                        placeholder="Estado"
                        value={uf}
                        options={[1, 2]}
                        onChange={e => setUf(e.target.value)}
                    />
                    <Input className="input" 
                        type="number" 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)} 
                    />
                    <button className="button" type="" >REGISTRAR</button>
            </form>
                 

        </div>
    );
}


