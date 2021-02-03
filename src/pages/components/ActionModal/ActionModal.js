import React, {useEffect} from 'react';
import './styles.css';


export default function ActionModal(props){

    useEffect(()=>{
        setTimeout(() => {
            document
            .querySelector('.actionModal')
            .classList.toggle('hide')/*adiciona e remove a class. Coloca e tira conforme tem ou não tem*/
        }, 300);
           
    }, [])
    


    return(
        <div>
            <text className="actionModal hide">{props.text2}{props.text}</text>
        </div>
       
    )
}