import React from 'react';
import Perfil from './ImagensPortfolio/perfil.png'
import Front from './ImagensPortfolio/icone-front.png'
import Mobile from './ImagensPortfolio/icone-mobile-verde.png'
import Games from './ImagensPortfolio/icone-game.png'
import * as S from './Style.jsx';

function Inicio() {
    return (
        <>
            <S.MainInicio>
                <S.SectionInicio>
                    <h1>Andréa Rangel</h1>
                    <img src={Perfil} alt="Icone Perfil" />
                </S.SectionInicio>

                <S.SectionApresentacao>
                    <S.SectionDescri1>
                        <h2>Desenvolvedora Front-End</h2>
                        <img src={Front} alt="Icone Front-end" />
                    </S.SectionDescri1>

                    <S.SectionDescri2>
                        <img src={Mobile} alt="Icone Mobile" />
                        <h2>Desenvolvedora Mobile</h2>
                    </S.SectionDescri2>

                    <S.SectionDescri3>
                        <h2>Desenvolvedora de Jogos</h2>
                        <img src={Games} alt="Icone Games" />
                    </S.SectionDescri3>
                </S.SectionApresentacao>

            </S.MainInicio>
        </>
    )
}

export default Inicio;