import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    Logo,
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn, 
    NavBtnLink} from './elements'
import LogoImg from '../../assets/madnessLogo2.png'
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'><Logo src={LogoImg}/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='/' spy={true} smooth={true} >Inicio</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about' spy={true} smooth={true}>¿Que es Madness?</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='wkout' spy={true} smooth={true} duration={500} offset={-70} activeClass="active">Gimnasios</NavLinks>
                        </NavItem>        
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Ingresar</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
