import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
/* background: ${({scrollNav}) => (scrollNav ? '#716E6E' : 'transparent')}; */
background: #2A2929E6;
height: 80px;
/* margin-top: -80px; */
display: flex;
justify-content: space-between;
/* align-items: center; */
/* font-size: 1rem; */
padding: 0.5rem calc((100vw- 1000px)/2);
/* top: 0; */
z-index: 10;

@media screen and (max-width: 960px){
	transition: 0.8s all ease;
}
`; 

// export const NavbarContainer = styled.div`
// display: flex;
// justify-content: space-between;
// height: 80px;
// z-index: 1;
// width: 100%;
// padding: 0 24px;
// max-width: 1100px;
// `;

export const NavLink = styled(LinkR)`
color: #9370db;;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover{
color: red;
};
`
// export const Bars = styled(FaBars)`
// display: none;
// color: #fff;

// @media screen and (max-width: 768px){
// 	display: block;
// 	position: absolute;
// 	top: 0;
// 	right: 0;
// 	transform: translate(-100%, 75%);
// 	font-size: 1.8rem;
// 	cursor: pointer;
// 	}
// `

// export const NavLogo = styled(LinkR)`
// color: #9370db;
// justify-self: flex-start;
// cursor: pointer;
// font-size: 1.5rem;
// display: flex;
// align-items: center;
// margin-left: 24px; //logo alignment
// font-weight: bold;
// text-decoration: none;
// `;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 60%);
	font-size: 1.8rem;
	cursor: pointer;
	color: #fffb9d;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
/* list-style: none;
text-align: center; */
margin-right: -24px;

@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavItem = styled.li`
height: 80px;
`;

// export const NavLink = styled(LinkR)`
// color: #fff;
// display: flex;
// align-items: center;
// text-decoration: none;
// padding: 0 1rem;
// height: 100%;
// cursor: pointer;

// &.active{
// 	border-bottom: 3px solid blue;
// }
// `;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: #9370db;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;

&:hover {
	transition: all 0.2s ease-in-out;
	background: red;
	color: #010606;
}
`;
