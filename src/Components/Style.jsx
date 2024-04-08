import React from 'react'
import styled from 'styled-components';



//----- ESTILO NAGEGAÇÃO
export const Header = styled.header`
display: flex;
justify-content: space-evenly;
align-items: center;
background-color: white;
height: 10vh;

img{
width: 5vw;
height: 10vh;
border-radius: 50%;
}

h1{
    color: green;
}
`

export const Menu = styled.nav`
display: flex;
//background-color: peru;

ul{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    width: 30vw;
    height: 10vh;
}
`
export const DivHeader = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
//background-color: pink;
width: 18%;
height: 100%;

img{
width: 25%;
height: 10vh;
border-radius: 50%;
}
`



//----- ESTILO PÁGINA INICIO
export const MainInicio = styled.main`
display: flex;
justify-content: space-evenly;
align-items:center;
width: 100vw;
height: 100vh;
background-color: #DBF2FF;
`

export const SectionPerfil = styled.section`

`

export const SectionInicio = styled.section`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
width: 35vw;
height: 70vh;
//background-color: yellow;


h1{
font-size: 3.6rem;
font-family: "Arial", sans-serif;
}

img{
width: 80%;
height: 70vh;
border-radius: 50%;
}
`

export const SectionApresentacao = styled.section`
display: flex;
justify-content: space-evenly;
flex-direction: column;
align-items:center;
width: 30vw;
height: 70vh;
border: solid 1px green;
`

export const SectionDescri1 = styled.section`
display: flex;
justify-content: center;
align-items:center;
background-color: #FF5757;
width: 100%;
height: 20vh;

img{
    width: 20%;
}
`

export const SectionDescri2 = styled.section`
display: flex;
justify-content: center;
align-items:center;
background-color: #CB6CE6;
width: 100%;
height: 20vh;

img{
    width: 20%;
}
`

export const SectionDescri3 = styled.section`
display: flex;
justify-content: center;
align-items:center;
background-color: #2ECF82;
width: 100%;
height: 20vh;

img{
    width: 20%;
}
`

//----- ESTILO PÁGINA SOBRE

export const MainSobre = styled.main`
display: flex;
justify-content: space-evenly;
width: 100vw;
height: 100vh;
background-color: #EAF7FF;
`

export const SectionSobre = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
//background-color: orange;
width: 40%;
height: 70%;
`

export const DivDescricao = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
//background-color: pink;
height: 60%;
`

export const DivHabilidades = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
//background-color: white;
height: 20%;
width: 90%;
`

export const SectionEducacao = styled.section`

display: flex;
flex-direction: column;
justify-content: space-around;
align-items:center;
//background-color: #FF5757;
width: 35%;
height: 70vh;

div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: solid 2px black;
    width: 80%;
    height: 25%;
}
`



//----- ESTILO PÁGINA PROJETOS

export const MainProjetos = styled.main`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background-color: greenyellow;
`

export const DivProjetos = styled.div`
display: flex;
justify-content: space-evenly;
background-color: pink;
width: 100%;
height: 75%;
`

export const DivProjeto1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
height: 90%;
width: 20%;
background-color: #FF5757;
`

export const DivProjeto2 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
height: 90%;
width: 20%;
background-color: #F57F14;
`

export const DivProjeto3 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
height: 90%;
width: 20%;
background-color: #80CE4F;
`

export const DivProjeto4 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
height: 90%;
width: 20%;
background-color: #A486DF;
`

export const Button = styled.button`
 -webkit-border-radius: 74px;
   -moz-border-radius: 74px;
   border-radius: 74px;
   height: 15px;
   line-height: 10px;
   color: #000000;
   font-family: "Arial", sans-serif;
   width: 60%;
   font-size: 20px;
   font-weight: 100;
   padding: 20px;
   background-color: #FFFFFF;
   border: solid #000000 1px;
   text-decoration: none;
   display: inline-block;
   cursor: pointer;
   text-align: center;
`