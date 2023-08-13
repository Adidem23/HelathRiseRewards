import '../Components/HeroSection.css';
import { useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {

    // const images = ['https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/rocket-dynamic-premium.png', 'https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/euro-dynamic-premium.png', 'https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/video-camera-dynamic-premium.png']

    // useEffect(() => {
    //     const imagediv = document.querySelector('.Image');
    //     console.log(imagediv);
    //     setTimeout(() => {
    //         imagediv.setAttribute("src", images[0]);
    //     }, 5000);
    // }, [images])



    return (
        <section className="hero">
            {/* Hero content on the left */}
            <div className="hero-content">
                <h1>POSify  PLAY GAMES , DO Exercise Earn NFT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, amet? Itaque atque vel est blanditiis consequuntur porro molestias iste unde?</p>
                <button className="hero-button">Get Started</button>
            </div>

            <div className="hero-image">
                {/* <img src={"https://3dicons.sgp1.cdn.digitaloceanspaces.com/v1/dynamic/premium/eth-dynamic-premium.png"} className="Image" alt="Image" /> */}
                <Spline scene="https://prod.spline.design/d36DR4VEYOTU5laL/scene.splinecode" />
            </div>
        </section>
    );
};

export default HeroSection;