import styled from 'styled-components';

export const PgContainer =styled.div`
background: #000;
text-align: center;
/* height: 100vw; */
`

export const Header = styled.h1`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const H2 = styled.h2`
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

export const Div = styled.div`
position: absoulte;
top: 20;
bottom: 40;
left: 10;
right: 10;
text-align: center;
color: red;
`
export const P1 = styled.p`
color: white;
`
export const Button = styled.button`
border-radius: 50px;
background: ${({primary}) => (primary ? 'blue' : 'blue')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#000' : 'red')};
font-size: ${({fontbig}) => (fontbig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? 'red' : 'red')};
}
`