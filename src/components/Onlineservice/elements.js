import styled from 'styled-components'

export const Section = styled.div`
    width:100%;
    height:300px;
    background-color:${props => props.red ? 'red' : 'white' };
    display:flex;
    flex-direction:${props => props.switched ? 'row-reverse' : 'row' };

    @media screen and (max-width: 1024px){
        flex-direction:column;
        height:fit-content;
    }
    @media screen and (max-width: 768px){
        flex-direction:column;
        height:fit-content;
    }
`
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:relative;
    z-index:1;
`
export const SectionImg = styled.img`
    height:250px;
`
export const SectionContent = styled.div`
    position:absolute;
    height:250px;
    padding:10px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
export const SectionTitle = styled.h2`
    color:black;
    font-size:1.5rem;
    margin:10px;
`

export const SectionText = styled.p`
    color:black;
    font-size:0.875rem;
    max-width:600px;
    margin:10px;
`