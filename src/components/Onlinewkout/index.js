import React from 'react'
import { MainContainer, PhotoContainer, PromoPhoto, ContentContainer,
Title, SubTitle, Text, Button} from './elements'


const OnlineWkout = () => {
    return (
        <>
        <MainContainer id='wkout'>
            <PhotoContainer >
                {/* <PromoPhoto src={Photo}/>     */}
            </PhotoContainer>
            <ContentContainer>
                <Title>Entrenamiento Online</Title>
                <SubTitle>100% femenino</SubTitle>
                <Text>Con la guía y el seguimiento de las mejores profesionales en el ambiente del fitness.</Text>
                <Button to='/onlineservice' exact strict> Comenzar </Button>
                
            </ContentContainer>        
        </MainContainer>    
        </>
    )
}

export default OnlineWkout
