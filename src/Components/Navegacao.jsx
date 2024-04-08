import React from 'react'
import Inicio from './Inicio.jsx'
import Sobre from './Sobre.jsx'
import Projetos from './Projetos.jsx'
import Perfil from '../Components/ImagensPortfolio/perfil.png'
import Linkedin from '../Components/ImagensPortfolio/rede-linkedin.png'
import GitHub from '../Components/ImagensPortfolio/rede-github.png'
import Pinterest from '../Components/ImagensPortfolio/rede-pinterest.png'
import Instagram from '../Components/ImagensPortfolio/rede-instagram.png'
import * as S from './Style.jsx';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Navegacao() {
    return (
        <>
            <S.Header>
                <img src={Perfil} alt="" />

                <S.Menu>
                    <ul>
                        <li>Inicio</li>
                        <li>Sobre</li>
                        <li>Projetos</li>
                    </ul>
                </S.Menu>

                <S.DivHeader>
                    <img src={Linkedin} alt="" />
                    <img src={GitHub} alt="" />
                    <img src={Pinterest} alt="" />
                    <img src={Instagram} alt="" />
                </S.DivHeader>
            </S.Header>

        </>
    )
}

export default Navegacao;