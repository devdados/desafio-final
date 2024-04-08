import React from 'react'
import HTML from '../Components/ImagensPortfolio/hab-html.png'
import CSS from '../Components/ImagensPortfolio/hab-css.png'
import REACT from '../Components/ImagensPortfolio/hab-react.png'
import Styled from '../Components/ImagensPortfolio/hab-styled.png'
import JS from '../Components/ImagensPortfolio/hab-js.png'
import CSharp from '../Components/ImagensPortfolio/hab-csharp.png'
import Unity from '../Components/ImagensPortfolio/hab-unity.png'
import Blender from '../Components/ImagensPortfolio/hab-blender.png'
import * as S from './Style.jsx';

function Sobre() {
    return (
        <>
            <S.MainSobre>
                <S.SectionSobre>
                    <S.DivDescricao>
                        <h1>Andréa Rangel</h1>
                        <h3>ou simplesmente Déa</h3>
                        <p>Sigo os dias desenvolvendo a própria
                            vida, enquanto aprendo a
                            desenvolver sites e aplicativos e jogos
                            bonitos</p>
                    </S.DivDescricao>

                    <S.DivHabilidades>
                        <img src={HTML} alt="" />
                        <img src={CSS} alt="" />
                        <img src={REACT} alt="" />
                        <img src={Styled} alt="" />
                        <img src={JS} alt="" />
                        <img src={CSharp} alt="" />
                        <img src={Unity} alt="" />
                        <img src={Blender} alt="" />
                    </S.DivHabilidades>
                </S.SectionSobre>


                <S.SectionEducacao>
                    <div>
                        <h3>2024</h3>
                        <p>Desenvolvimento em Front-End | Html, CSS, React</p>
                        <p>Vai Na Web - Programa Talentos Digitais</p>
                    </div>
                    <div>
                        <h3>2024</h3>
                        <p>Desenvolvimento Mobile | Dart e Flutter</p>
                        <p>Escola Korú - Programa Desenvolve Boticário</p>
                    </div>
                    <div>
                        <h3>2023-2025</h3>
                        <p>Desenvolvimento de Jogos Digitais | C#, Unity, Unreal, modelagem 3D</p>
                        <p>Instituto Federal da Bahia</p>
                    </div>

                </S.SectionEducacao>

            </S.MainSobre>
        </>
    )
}

export default Sobre;