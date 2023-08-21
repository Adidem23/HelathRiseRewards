import '../Components/Navbar.css';
import { useState } from 'react';


const Navbar = () => {

    const [Account, setAccount] = useState(" ")

    const ConnectMetamask = async () => {

        const { ethereum } = window;
        const acc = document.getElementById('munde');

        const account = await ethereum.request({
            method: "eth_requestAccounts",
        });

        setAccount(account[0]);

        ethereum.on('accountsChanged', async (accountnew) => {
            setAccount(accountnew[0]);
        })

        acc.innerText = "Connected";

    }


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
                {Account && <li>{Account}</li>}

            </ul>


            <button className="connect-button but2" id='munde' onClick={ConnectMetamask}>Connect</button>
        </nav>
    );

};

export default Navbar;
