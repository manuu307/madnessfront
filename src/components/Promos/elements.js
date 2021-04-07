import styled from 'styled-components'
import Slider from 'react-slick'
import {Link as LinkR} from 'react-router-dom'

export const StyledSlider = styled(Slider)`
    padding:30px 0;
    width:100%;
    height:38vh;
    position: relative;
    background-color:rgb(46, 49, 49);
    display:flex;
    
    
    @media screen and (max-width:1024px){
        width:100%;
        height:26vh;
    }
`
export const Link = styled(LinkR)`
    display:flex;
    align-items:center;
    justify-content:center;
    width:fit-content;
`
export const Flyer = styled.img`
    height:30vh; 
    width:50vw;
    border-radius:10px;
    object-fit:contain;
    @media screen and (max-width:1024px){
        height:auto;
        width:100%;
    }
`