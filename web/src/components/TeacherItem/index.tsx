import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
    return (

        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/22664239?s=460&u=c5f44e819fa94b5d736c02048c81f4d8aa14882f&v=4" alt="André Oliveira"/>
                <div>
                    <strong>André Oliveira</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Texto.
                <br/><br/>
                Texto.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;