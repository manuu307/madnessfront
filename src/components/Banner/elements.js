import { Link } from 'react-scroll'
import styled from 'styled-components'

export const BannerContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 30px;
    height:600px;
    position:relative;
    z-index:1;
`

export const BannerBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    width:100%;
    height:100%;
    overflow:hidden;
`
export const BannerVid = styled.video`
    width:100%;
    height:100%;
    -o-object-fit:cover;
    object-fit:cover;
`
export const BannerContent = styled.div`
    z-index:3;
    max-width:1200px;
    position:absolute;
    padding:8px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const BannerTitle = styled.h1`
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
export const BannerText = styled.p`
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
export const BannerBtnWrapper = styled.div`
    margin-top:32px;
    display:flex;
    flex-direction:column;
    align-items:center;
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