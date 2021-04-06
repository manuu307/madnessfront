import styled from 'styled-components'
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: black;
    height:80px;
    position:sticky;
    align-items:center;
    top:0;
    z-index:10;
`

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:80px;
    z-index:1;
    width:100%;
    padding:0 24px;
    max-width:1100px;
    margin-right:auto;
    margin-left:auto;
`
export const Logo = styled.img`
    width:120px;
`
export const NavLogo = styled(LinkR)`
    color:white;
    justify-self:flex-start;
    cursor:pointer;
    font-size:1.5rem;
    display:flex;
    align-items:center;
    font-weight:bold;
    text-decoration:none;   

`

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%, 60%);
        font-size:1.8rem;
        cursor:pointer;
        color:white;
    }
`
export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;
    margin-right:-22px;

    @media screen and (max-width: 768px){
        display:none;
    }
`
export const NavItem = styled.li`
    height:80px;
`
export const NavLinks = styled(LinkS)`
    color:white;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding:0 1rem;
    cursor:pointer;
    height:100%;
    

    &:hover{
        transition:all 0.2s ease-in-out;
        color:red;
    }

    &.active{
        border-bottom: solid 3px red;
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width: 768px){
        display:none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    background:red;
    color:white;
    white-space:nowrap;
    padding:10px 22px;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:white;
        color:black;
    }
`