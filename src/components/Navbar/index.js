import {GiCrystalBars} from 'react-icons/gi';
// import React, {useEffect, useState} from 'react';
import React from 'react';
// import {animateScroll as scroll} from 'react-scroll';
import {
  Nav,
  NavMenu,
  NavLink,
  NavBtn,
  MobileIcon,
  NavBtnLink, 
} from './NavbarElements';

const Navbar = ({toggle}) => {


  return (
    <>
      <Nav>
        <NavLink>
          <h1>ブラックキャップ</h1>
        </NavLink>
        <MobileIcon onClick={toggle}>
          <GiCrystalBars />
        </MobileIcon>
        <NavMenu>
          <NavLink to="/code" activestyle='true'>
            $.(The Story)
          </NavLink>
          <NavLink to="/NWO" activestyle='true'>
            $.(The Response)
          </NavLink>
          <NavLink to="/TommyGun" activestyle='true'>
            $.(The Connection)
          </NavLink>
          <NavLink to="/signUp" activestyle='true'>
            $.(The Effectiveness)
          </NavLink>
          <NavLink to="/call" activestyle='true'>
            $.(The Call)
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>BACK</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;