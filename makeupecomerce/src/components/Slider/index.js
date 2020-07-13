import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

import './_slider.scss';

const photos = [
    {
        name: "img1",
        url: "imgs/blowdryer.jpeg"
    },
    {
        name: "img3",
        url: "imgs/bronzer.png"
    },
    {
        name: "img4",
        url: "imgs/blush.jpg"
    }
]


class Slide extends React.Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
            autoplay: true,
            className: "slides"
        }
        return (
            <div className="slider">
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return(
                            <div>
                                <img src={photo.img} />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default Slide;