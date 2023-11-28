import styled from 'styled-components';

export const PgContainer =styled.div`
background: #000;
width: 100vw;
height: 100vh;
/* max-width:1300px;
margin-right: auto;
margin-left: auto; */
/* padding: 0 50px; */
/* height: 800px; */
/* position: relative;
margin: 0;
padding: 0; */
/* overflow: scroll; */

/* @media screen and (orientation: landscape){
    width: auto;
    height: auto;

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
/* overflow: hidden; */
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);


`


export const Vid = styled.video`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`;

export const Img = styled.img`
width: 30%;
border-radius: 50%;
margin: 0 0 10px 0;
padding-right: 0;
`;

export const Img2 = styled.img`
width: 50vw;
border-radius: 10%;
margin: 0 0 10px 0;
padding-right: 0;
`;