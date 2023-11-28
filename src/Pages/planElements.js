import styled from 'styled-components';

export const PgContainer =styled.div`
background: #000;
height: 100vh;
width: 100%;
/* max-width:100%; */
margin-right: auto;
margin-left: auto; 
padding: 0 50px;
/* height: 100vh; */
position: fixed;
margin: 0;
padding: 0;
overflow: scroll;

/* @media screen and (max-width: 960px){
    padding: 0;
} */
`

export const Header = styled.h1`
color:${(props) => props.color};
/* text-align: center; */
padding: 50px 0;
position: relative;
font-size:${(props) => props.font};
/* min-height: 100vh; */
display: flex;
overflow: hidden;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
`
export const Body = styled.div`
color:${(props) => props.color};
border: 200px;
margin-top: 100px;
margin-bottom: 100px;
margin-right: 100px;
margin-left: 80px;
text-align: center;
justify-content: center;
font-size:${(props) => props.font};

`