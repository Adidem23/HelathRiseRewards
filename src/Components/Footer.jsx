import '../Components/Footer.css'; 
import companyLogo from '../Images/SukunaLogo.png'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <img src={"https://img.freepik.com/free-vector/red-logo-black-background_1195-52.jpg?w=740&t=st=1692231919~exp=1692232519~hmac=7c252187bb258b91eb6da250a69c7df2e10140e08252939e9617866a45dfea3d"} alt="Company Logo" className="company-logo" />
                </div>
                <div className="footer-right">
                    <div className="contact-info">
                        <h3>Contact Us</h3>
                        <p>Email:adityasuryawanshi1310@gmail.com</p>
                        <p>Phone:+91 8421693017</p>
                    </div>
                    <div className="footer-features">
                        <h3>Features</h3>
                        <ul>
                            <li>NFT</li>
                            <li>ERC20</li>
                            <li>Testnet Ethers</li>
                        </ul>
                    </div>
                    <div className="footer-resources">
                        <h3>Resources</h3>
                        <ul>
                            <li>Adidem23</li>
                            <li>AthuGod</li>
                            <li>SassyDad</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Your Website Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
