import React, {Component} from 'react'
import { StyledSlider, Link, Flyer} from './elements'

class Promos extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 1500,
      };
      const Flyers = [
        { id:1, name:'promo x1', img:'https://www.cheatsheet.com/wp-content/uploads/2017/06/woman-fitness-Medicine-Ball-exercises-silhouette.jpg', link:'/' },
        { id:2, name:'promo x2', img:'https://www.ukactive.com/wp-content/uploads/2017/01/ukactive-boutique-fitness-physical-activity.jpg', link:'/' },
        { id:3, name:'promo x3', img:'https://www.techscrolling.com/wp-content/uploads/2020/03/activity-tracking-with-fitness-trackers.jpg', link:'/' },
    ]
    
      return (
          <>
        <StyledSlider {...settings}>
  {Flyers.map((promo) => (
        <Link to={promo.link}>
          <Flyer src={promo.img}/>
        </Link>
      ))}
        </StyledSlider>
        </>
      );
    }
  }
        

export default Promos



