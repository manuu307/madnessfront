import React from 'react'
import {SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper,
    SideBtnWrap,
    SidebarRoute } from './elements'

function Sidebar({ isOpen, toggle}) {
    return (
        <>
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink onClick={toggle} to='home'>Inicio</SidebarLink>
                <SidebarLink onClick={toggle} to='about'>About</SidebarLink>
                <SidebarLink onClick={toggle} to='gyms'>Gym's</SidebarLink>     
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign in</SidebarRoute>
            </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
        </>
    )
}

export default Sidebar
