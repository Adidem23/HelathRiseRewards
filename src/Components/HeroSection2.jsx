import '../Components/HeroSection2.css';
import Spline from '@splinetool/react-spline';

const HeroSection2 = () => {
    return (
        <section className="second-hero">
            <div className="second-hero-content">
                <h1 className="second-hero-title">Enjoy Your Exercise Time</h1>
                <div className="second-hero-container">
                    <div className="second-hero-image">
                        <Spline scene="https://prod.spline.design/d36DR4VEYOTU5laL/scene.splinecode" />

                    </div>
                    <div className="second-hero-text">
                        <h2 className="second-hero-content-title">Happiness Matters</h2>
                        <p className="second-hero-content-text">Come! Explore! Make Connections and Start Become Healthier in More Efficient Way Possible.HealthRise Provides You that Platform Collaborate , Enjoy and Explore and Make Yourself More happy Thats Our Motto</p>

                        <button id='but'>Start</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection2;
