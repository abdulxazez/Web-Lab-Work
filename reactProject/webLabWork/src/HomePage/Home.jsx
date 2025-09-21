import React from 'react'
import HeroSection from './HeroSection'
import NavBar from './NavBar';
import DietAI from '../DietAI';
import HotSelling from './HotSelling';
import Footer from './Footer';

function Home() {
  return (
    <>
    <div className="container-fluid">
        <div className="row" style={{height: "20vh", width: "99.01vw", border: "1px solid black"}}>
            <div className="col" style={{height: "100%", width: "100%", position: "relative"}}>
                    <NavBar />
            </div>
        </div>
        <div className="row" style={{height: "50vh", border: "5px solid rbg(60, 60, 60)",  backgroundColor: "rgb(60, 60, 60)" }}>
            <div className="col-12" style={{display:"flex", alignContent: "space-between"}} >
                <HotSelling />
            </div>
        </div>
        <div className="row" style={{height: "26vh", border: "1px solid rbg(60, 60, 60)", width: "99.01vw"}}>
            <div className="col" style={{width: "100vw",position: "relative"}}>
                <HeroSection />
            </div>
        </div>
        <div className="row" style={{height: "40vh", border: "1px solid rbg(60, 60, 60) ", alignItems: "start"}}>
                <Footer />
        </div>

    </div>
    </>
  )
}

export default Home;