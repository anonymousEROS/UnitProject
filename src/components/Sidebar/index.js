import React from 'react'
import{
SidebarContainer,
Icon,
CloseIcon,
SidebarWrapper,
SidebarMenu,
SidebarLink,
SideBtnWrap,
SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='/code' onClick={toggle}>$.(Story)</SidebarLink>
                <SidebarLink to='/NWO' onClick={toggle}>$.(Response)</SidebarLink>
                <SidebarLink to='TommyGun' onClick={toggle}>$.(Connection)</SidebarLink>
                <SidebarLink to='signUp' onClick={toggle}>$.(Effectiveness)</SidebarLink>
                <SidebarLink to='call' onClick={toggle}>$.(Casting)</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/about'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar