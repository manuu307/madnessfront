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
                <SubTitle>100% femenino y con seguimiento</SubTitle>
                <Text>De la mano con las mejores profesionales del ambiente del fitness.</Text>
                <Button to='/onlineservice'> Comenzar </Button>
                
            </ContentContainer>        
        </MainContainer>    
        </>
    )
}

export default OnlineWkout
