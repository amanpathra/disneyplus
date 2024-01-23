import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImgSlider() {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="" />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    padding-top: 10px;

    ul li button{
        &:before{
            font-size: 10px;
            color: white;
        }
    }

    li.slick-active button::before{
        color: #d9d9d9;
    }

    button{
        z-index: 1;
    }

    .slick-prev:before {
        font-size: 25px;
    }
    .slick-next:before {
        font-size: 25px;
    }

    .slick-list{
        overflow: visible;
    }

    .slick-slide{
        padding: 10px 5px;
    }
`

const Wrap = styled.div`
    img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 65%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 16px -10px;
        border: 2px solid transparent;
        transition-duration: 0.3s;
        
        &:hover{
            border: 2px solid rgba(150, 150, 150, 0.7)
        }
    }
`