import '../Components/HeroSection.css';
import Spline from '@splinetool/react-spline';
import {Link} from 'react-router-dom';

const HeroSection = () => {

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>HealthRise: Get Paid For Your Daily Activities</h1>
                <p>Havent You Explored?? Just Get Up From Bed and Explore the Newer Technologies</p>
                <Link to="/games"><button className="hero-button but2">Get Started</button></Link>
            </div>

            <div className="hero-image">
                <Spline scene="https://prod.spline.design/7mshLneit2lhgKeQ/scene.splinecode" style={{ marginLeft: "70px" }} />
            </div>
        </section>
    );
};

export default HeroSection;