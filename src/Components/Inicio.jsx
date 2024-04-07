import React from 'react';
import Perfil from './ImagensPortfolio/perfil.png';
import * as S from './Style.jsx';

function Inicio() {
    return (
        <S.ContainerInicio>
            <S.Section1>
                <h1>Andréa Rangel</h1>
                <S.Perfil src={Perfil} alt="" />
                <img src="" alt="" />

            </S.Section1>
            <div>
                <h2>Desenvolvedora Front-End</h2>
                <img src="" alt="" />
            </div>

            <div>
                <h2>Desenvolvedora Mobile</h2>
                <img src="" alt="" />
            </div>

            <div>
                <h2>Desenvolvedora de Jogos</h2>
                <img src="" alt="" />
            </div>

            <div>
                <h2>Desenvolvedora de Conteúdos</h2>
                <img src="" alt="" />
            </div>






            <S.Section2>

            </S.Section2>
        </S.ContainerInicio>
    )
}

export default Inicio;