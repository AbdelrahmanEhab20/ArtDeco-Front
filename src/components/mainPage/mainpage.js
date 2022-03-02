import React from 'react';
import SlideShow from "../slideshow/slideshow";
import Features from "../Feature/Feature";
import Content from "../Content/Content";
import Subscribe from "../subscribe/Subscribe";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonials/testimonials";
// import Pricing from "../Pricing/Price";
// import InfoSection from '../Info/InfoSection'
// import LandScape from '../Info/LandScape'

export default function MainPage() {
    return (
        <>
            <SlideShow />
            <Features />
            {/* <Pricing /> */}
            <Content />
            {/* <LandScape /> */}
            {/* <InfoSection /> */}
            <header className="App-header">
                <h1>Hear From Our Clients </h1>
                <Testimonials />
            </header>
            <Subscribe />
            <Footer />
        </ >

    )
}