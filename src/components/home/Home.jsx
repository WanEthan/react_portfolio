import React from 'react';
import "./home.css"
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className='home container'>
      <div className="intro">
        <img src={Me} alt="" className='home_img' />
        <h1 className="home__name">Ethan Wan</h1>
        <span className="home__education">I am Full-Stack Software Developer</span>

        <HeaderSocials/>

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home