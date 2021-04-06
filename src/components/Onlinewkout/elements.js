import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Photo from '../../assets/eli_stand.png'

export const MainContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 30px;
    height:800px;
    position:relative;
    background-color:black;
    z-index:1;
`
export const PhotoContainer = styled.div`
    margin-left:-10rem;
   background-image:url(${Photo});
   height:600px;
   width:50%;
   background-position:center;
   background-repeat:no-repeat;
   background-size:contain;
`
export const PromoPhoto = styled.img`
    height:600px;
    left:0;
`
export const ContentContainer = styled.div`
    
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const Title = styled.h1`
    color:white;
    font-size:48px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size:40px;
    }
    @media screen and (max-width: 480px){
        font-size:32px;
    }
`
export const SubTitle = styled.h4`
    color:white;
    font-size:24px;
    text-align:center;
    max-width:600px;

    @media screen and (max-width: 768px){
        font-size:20px;
    }
    @media screen and (max-width: 480px){
        font-size:18px;
    }
`
export const Text = styled.p`
    color:white;
    font-size:20px;
    text-align:center;
    max-width:600px;

    @media screen and (max-width: 768px){
        font-size:16px;
    }
    @media screen and (max-width: 480px){
        font-size:12px;
    }
`
export const Button = styled(Link)`
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