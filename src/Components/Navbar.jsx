import '../Components/Navbar.css';



const Navbar = () => {


    return (
        
        <nav className="navbar">
            <div className="logo">
                <img src={"https://img.freepik.com/free-vector/red-logo-black-background_1195-52.jpg?w=740&t=st=1692231919~exp=1692232519~hmac=7c252187bb258b91eb6da250a69c7df2e10140e08252939e9617866a45dfea3d"} alt="Logo" />
                <span className="logo-text">HealthRise</span>

            </div>

            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>


            <button className="connect-button but2" id='munde'>Connect</button>
        </nav>
    );

};

export default Navbar;
