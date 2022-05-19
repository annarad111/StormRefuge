
import React, { useState } from 'react';
import { FullPage, Slide } from 'react-full-page';
import lol from '../videos/lol.mp4';
import './Slider.css'
import sylvanas from '../images/sylvanas.png';
import AOS from 'aos';
import "aos/dist/aos.css";
import Button from '@mui/material/Button';
AOS.init()


const controlsProps = {
  style: {
    left: '95%',
    paddingTop: '10px',
    position: 'fixed',
    display: 'grid',
    top: '50%',
    transform: 'translateX(-50%)',
    text: '',
    fontsize: '0',
  },
};

const slides = [
  {
    color: '#2ECC40',
    content: 1,
  }, {
    color: '#0074D9',
    content: 2,
  }, {
    color: '#00c4ff',
    content: 3,
  }, {
    color: '#d52685',
    content: 4,
  },
];

const btnStyles = {
  position: 'fixed',
  padding: '8px',
};

export default function FullPageExample() {
  const [visibleSlides, setVisibleSlides] = useState(slides);
  const onHideSlideClick = () => {
    if (visibleSlides.length === slides.length) {
      setVisibleSlides(slides.slice(0, -1));
      return;
    }
    setVisibleSlides(slides);
  };

  return (
    <>
      <FullPage controls controlsProps={controlsProps}>
      <Slide>
          <section className='sec'>
            <div className="overlay"></div>
                <video src={lol} autoPlay loop muted className='video2'></video>
                <div className='videoback'>
                    <h1 className='titlelogo'>Storm Refuge</h1>
                    <h2 className='titleonvideo'>Helping gamers worldwide!</h2>
                    <button className='buttononvid'>
                <a href='/games'>Learn more</a></button>
            </div>
        </section>
          </Slide>
          <Slide className='slide2'>
            <div className='slide2'>
            <img src={sylvanas} alt="All games" className='sylvanas'/>
            <div data-aos="zoom-in">
            <div className='slide2description'>
            <h1 className='sylvanastitle'>Find out everything about the games you love!</h1>
            <h3>Get all the information about old and new games</h3>
            <h3>Find out news about upcoming games</h3>
            <h3>Create your own favourite lists</h3>
            <button class="custom-btn btn-12"><span><a href="/games">Let's go!</a></span><span>Are you ready ?</span></button>
            </div>
            </div>
            
            </div>
          </Slide>  
      </FullPage>
    </>
  );
}