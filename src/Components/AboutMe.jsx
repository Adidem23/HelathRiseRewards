import '../Components/AboutMe.css';
import Aditya from '../Images/Adidem.png';

const AboutMe = () => {
    return (
        <section className="about-section">
            <div className="about-heading">
                <h1>About Me</h1>
            </div>
            <div className="about-content">
                <div className="about-image">
                    <img src={Aditya} alt="About Me" />
                </div>
                <div className="about-text">
                    <h3>I am Aditya Suryawanshi</h3>
                    <p>
                        I am Currently in my Third Year Of Engineering at VIT Pune. I have Passion For  Blockchain and Full Stack Web Developement. I am Dumb and My Existence on Earth is Useless . I am also the ultimate @NallaBerojgaar . I am useless I cannot handle Pressure and I cannot do things Neatly But I Want to Learn New Things
                    </p>
                </div>

            </div>
            <div className="about-text2">
                <h3>MY TECH STACK</h3>
                <img src="https://img.icons8.com/?size=512&id=PXTY4q2Sq2lG&format=png" className="img" />
                <img src="https://img.icons8.com/?size=512&id=Vra58PN2KmI5&format=png"  className="img" />
                <img src="https://img.icons8.com/?size=512&id=ouWtcsgDBiwO&format=png" className="img" />
                <img src="https://img.icons8.com/?size=512&id=74402&format=png"  className="img"/>
                <img src="https://img.icons8.com/?size=512&id=HOqGCOyHDbd4&format=png"  className="img"/>
                <img src="https://img.icons8.com/?size=512&id=Oi106YG9IoLv&format=png" className="img" />
                <img src="https://img.icons8.com/?size=512&id=24895&format=png"  className="img"/>
                <img src="https://img.icons8.com/?size=512&id=n3QRpDA7KZ7P&format=png"  className="img"/>
                <img src="https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png"  className="img"/>


            </div>
        </section>
    );
};

export default AboutMe;
