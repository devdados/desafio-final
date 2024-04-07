import React from 'react';
import HTML from './ImagensPortfolio/hab-html.png';
import CSS from './ImagensPortfolio/hab-css.png';
import REACT from './ImagensPortfolio/hab-react.png';
import STYLED from './ImagensPortfolio/hab-styled.png';
import JS from './ImagensPortfolio/hab-js.png';
import CSHARP from './ImagensPortfolio/hab-csharp.png';
import UNITY from './ImagensPortfolio/hab-unity.png';
import BLENDER from './ImagensPortfolio/hab-blender.png';
import * as S from './Style.jsx';


function Sobre() {
    return (
        <S.MainSobre>
            <S.SectionSobre>
                <h1>Andréa Rangel</h1>
                <h3>ou simplesmente Déa, como preferir</h3>
                <p>Estudante de Jogos digitais e desenvolvedora front-end.</p>

                <S.DivHabilidades>
                    <div>
                        <img src={HTML} alt="Logo HTML" />
                        <img src={CSS} alt="Logo CSS" />
                        <img src={REACT} alt="Logo React" />
                        <img src={STYLED} alt="Logo Styled" />
                        <img src={JS} alt="Logo JavaScript" />
                        <img src={CSHARP} alt="Logo C#" />
                        <img src={UNITY} alt="Logo Unity" />
                        <img src={BLENDER} alt="Logo Blender" />
                    </div>
                </S.DivHabilidades>
            </S.SectionSobre>

            <S.SectionFormacao>
                <S.DivFormacao>
                    <div>
                        <h4>2023-2024</h4>
                        <p>Desenvolvimento em Front-End
                            Html, CSS, React
                            Vai Na Web - Programa Talentos Digitais</p>
                    </div>

                    <div>
                        <h4>2024</h4>
                        <p>Desenvolvimento Mobile
                            Dart e Flutter
                            Escola Korú - Programa Desenvolve</p>
                    </div>

                    <div>
                        <h4>2023-2025</h4>
                        <p>Desenvolvimento de Jogos Digitais
                            C#, Unity, Unreal, modelagem 3D
                            Instituto Federal da Bahia</p>
                    </div>
                </S.DivFormacao>

            </S.SectionFormacao>
        </S.MainSobre>
    )
}

export default Sobre;