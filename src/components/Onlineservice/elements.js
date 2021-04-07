import styled from 'styled-components'

export const Parallax = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    z-index:1;
    box-sizing:border-box;
`
export const Section = styled.div`
    justify-content:space-around;
    width:100%;
    height:300px;
    background-color:${props => props.red ? 'red' : 'white' };
    display:flex;
    flex-direction:${props => props.switched ? 'row-reverse' : 'row' };
    background-color:black;
    

    @media screen and (max-width: 1024px){
        flex-direction:column;
        height:fit-content;
    }
    @media screen and (max-width: 768px){
        flex-direction:column;
        height:fit-content;
    }
`
export const SectionImg = styled.img`
    
`
export const SectionContent = styled.div`
    /* padding: 20;
    position:absolute;
    
    transform: translate(-50%,-50%);
    justify-content:right; */
    margin-top:-20rem;
    align-items:center;
    position:absolute;
    height:fit-content;
`
export const SectionTitle = styled.h2`
    color:black;
    font-size:5rem;
    margin:-50px;
    color:${props => props.whitecolor ? 'white' : 'black' };
    text-shadow: black 2px 2px;
    
`

export const SectionText = styled.p`
    color:black;
    font-size:1.5rem;
    margin:20px;
    text-shadow: black 2px 2px;
`