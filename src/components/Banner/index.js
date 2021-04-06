import React from 'react'
import { BannerVid, BannerContainer, BannerBg, BannerContent, BannerTitle, BannerText,BannerBtnWrapper, Button } from './elements'
import Video from '../../assets/video/Synergym.mp4'
const Banner = (props) => {
    return (
        <BannerContainer>
            <BannerBg>
            <BannerVid autoPlay={true} controls={false} 
            loop={true} muted={true} 
            src={Video} type='video/mp4'/>
            </BannerBg>
            <BannerContent>
                <BannerTitle>{props.title}</BannerTitle>
                <BannerText>{props.text}</BannerText>
                <BannerBtnWrapper>
                    <Button to='/signup'>
                        Comienza ya!
                    </Button>
                </BannerBtnWrapper>
            
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner
