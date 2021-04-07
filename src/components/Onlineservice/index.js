import React, {useState, useEffect} from 'react'
import {Parallax, Section, SectionContent, SectionImg, SectionTitle, SectionText} from './elements'
import TestImg from '../../assets/fitness2.jpg'
import imgOne from '../../assets/eli1.jpg'
import imgTwo from '../../assets/woman.jpg'
import imgThree from '../../assets/eli3.jpg'



const OnlineService = () => {
    
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

      const image1 = imgOne;
        // "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
      const image2 = imgTwo;
        // "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
      const image3 = imgThree;
        // "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
      const image4 = imgOne;
        // "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
      
    return (
        <div>
        <Parallax>
            <SectionImg style={{transform: `translateY(${offsetY * 0.8}px)`, opacity:`0.8`}} src={imgTwo}/>
            <SectionContent style={{transform: `translateY(${offsetY * 0.1}px)`}}>
                <SectionTitle whitecolor style={{fontSize:`${100 + offsetY *0.5}px`}}>Madness</SectionTitle>
                <SectionText whitecolor style={{color:`red`,fontSize:`${50 + offsetY *0.2}px`}}>Workout</SectionText>
            </SectionContent>

            <SectionContent style={{marginTop:`100rem`,transform: `translateX(${50 + offsetY * 0.1}px)`}}>
                <SectionTitle whitecolor >Entrenamiento online</SectionTitle>
                <SectionText whitecolor style={{color:`white`}}>Obtendras un entrenamiento con seguimiento de la mano de las mejores.</SectionText>
            </SectionContent>

            <SectionContent style={{marginTop:`200rem`,transform: `translateX(${50 - offsetY * 0.1}px)`}}>
                <SectionTitle whitecolor >Clases de Gimnasia!</SectionTitle>
                <SectionText whitecolor style={{color:`white`}}>No te las pierdas.</SectionText>
            </SectionContent>

            <SectionContent style={{marginTop:`230rem`,transform: `translateY(${-100 + offsetY * 0.2}px)`}}>
                <SectionTitle whitecolor >Comienza ya!</SectionTitle>
            </SectionContent>
        </Parallax>
        </div>
);
}

export default OnlineService
