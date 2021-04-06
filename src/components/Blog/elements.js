import styled from 'styled-components'
import { Link } from 'react-router-dom'
export const BlogContainer = styled.div`
    display:grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    grid-gap: 50px;
    justify-content:center;
    align-items:center;
    width:100%;
    height:600px;
    position:relative;
    z-index:1;

    @media screen and (max-width: 1024px){
        grid-template-columns: auto auto;
        grid-template-rows: auto;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: auto;
        grid-template-rows: auto;
    }
`
export const BlogPost = styled.div`
    height:60vh;
    width:25vw;
    min-width:300px;
    display:flex;
    flex-direction:column;
    text-align:left;
    border-radius:10px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);

    @media screen and (max-width: 1024px){
        min-width:300px;
    }
    @media screen and (max-width: 768px){
        min-width:400px;
    }
`
export const BlogImg = styled.img`
    width: 100%;
    height:35vh;
    object-fit: contain;
    object-position:center;
`

export const BlogTitle = styled.h1`
    color:black;
    font-size:1.5rem;
    margin:10px;
`
export const BlogText = styled.p`
    color:black;
    font-size:0.875rem;
    max-width:600px;
    margin:10px;
`
export const BlogPostLink = styled(Link)`
    text-decoration:none;
    color:red;
    font-size:16px;
    margin:10px;
`