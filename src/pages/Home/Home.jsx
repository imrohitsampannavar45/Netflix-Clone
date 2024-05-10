import React from 'react'
import './Home.css';
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner}alt=""  className='banner-image'/>
      <div className="hero-caption">
        <img  className= 'caption-img'src={hero_title} alt="" />
        <p>"The Protector," which is a 1985 action film starring Jackie Chan. In this movie, Jackie Chan plays a Hong Kong cop named Billy
           Wong who travels to New York City to extradite a drug lord back to Hong Kong</p>
<div className="hero-btns">
  <button className='btn '><img src={play_icon} alt="" />Play</button>
  <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
</div>
<TitleCards />
      </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbutser Movies"} category={"top_rated"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Only on Netflix"} category={"popular"}/>
      <TitleCards title={"Top Picks for You"} category={"now_playing"} />
      </div>
    <Footer />
    </div>
  )
}

export default Home