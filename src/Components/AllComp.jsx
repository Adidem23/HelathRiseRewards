import Navbar from './Navbar';
import HeroSection from './HeroSection';
import MarqueSection from './MarqueSection';
import HeroSection2 from './HeroSection2';
import Cards from './Cards';
import AboutMe from './AboutMe';
import Connect from './Connect';
import Footer from './Footer';


const AllComp = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <MarqueSection />
            <HeroSection2 />
            <Cards />
            <AboutMe />
            <Connect />
            <Footer />
        </>
    )
}

export default AllComp;