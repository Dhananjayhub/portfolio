import React from 'react'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { Link } from 'react-scroll';
const PortfolioSlider=() =>{
    const data=[
        {title:"colorful Art work", subtitle:"See Detaila", image:"images/portfolio_3.jpeg"},
        {title:"colorful Art work", subtitle:"See Detaila", image:"images/portfolio_1.jpeg"},
        {title:"colorful Art work", subtitle:"See Detaila", image:"images/portfolio_0.jpeg"},
        {title:"colorful Art work", subtitle:"See Detaila", image:"images/portfolio_2.jpeg"},
        {title:"colorful Art work", subtitle:"See Detaila", image:"images/portfolio_3.jpeg"},
        {title:"colorful Art work", subtitle:"See Detaila", image:"images/portfolio_1.jpeg"},
        {title:"colorful Art work", subtitle:"See Detaila", image:"images/portfolio_0.jpeg"},
        {title:"colorful Art work", subtitle:"See Detaila", image:"images/portfolio_2.jpeg"},
        {title:"colorful Art work", subtitle:"See Detaila", image:"images/portfolio_3.jpeg"},
        {title:"colorful Art work", subtitle:"See Detaila", image:"images/portfolio_1.jpeg"},
        {title:"colorful Art work", subtitle:"See Detaila", image:"images/portfolio_0.jpeg"},
        {title:"colorful Art work", subtitle:"See Detaila", image:"images/portfolio_2.jpeg"},
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <Slider {...settings} className='lg:-mx-64'>
        {
            data.map((item,index)=><Link key={index} to="/"  class='relative'>
                <div className='absolute top-0 left-0 bg-black/50 w-full h-full rounded-2xl'></div>
                <div>
                    <img src={item.image} alt="" className='rounded-2xl'/>
                </div>
                <div className='absolute top-0 left-0 hover:bg-rose-700/70 w-full h-full flex items-center
                justify-center rounded-2xl cursor-pointer'>
                  <div className='text-center'>
                  <h2 className='text-2xl font-semibold mb-1'>{item.title}</h2>
                  <p>{item.subtitle}</p>
                </div>
                </div>
            </Link>
            )
        }
  </Slider>
  )
}

export default PortfolioSlider;