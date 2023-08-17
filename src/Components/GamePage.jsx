import '../Components/GamePage.css';
import GoToTop from './GoToTop';
import Spline from '@splinetool/react-spline';
import Webcam from 'react-webcam';
import { useState, useRef, useEffect } from 'react';
import * as posenet from '@tensorflow-models/posenet';
import * as tf from '@tensorflow/tfjs';
import { useContract, ThirdwebSDK } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import confetti from 'canvas-confetti';

const GamePage = () => {

    const [Account, setAccount] = useState("");
    const [WristCount, setWristCount] = useState(0);
    const [WristStopCount, setWristStopCount] = useState(0);
    const [Win, setWin] = useState(false);
    const [Game, setGame] = useState("");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [But, setBut] = useState("False");
    const games = ['WristCheck', 'StoppyFloppy', 'LuckFuck'];
    const [Activewebcam, setActivewebcam] = useState(true);
    const { contract } = useContract("0x124bF5CdbFf3eec1508970cF3704f53BB2fa9cA9");

    const NameChange = (e) => {
        setName(e.target.value);
    }

    const EmailChange = (e) => {
        setEmail(e.target.value);
    }

    const FormSubmitted = async (e) => {
        e.preventDefault();
        setBut("True");
        const randomnumber = Math.floor(Math.random() * games.length);
        setGame(games[randomnumber]);
        setActivewebcam(true);
        const { ethereum } = window;
        const account = await ethereum.request({
            method: "eth_requestAccounts",
        });
        setAccount(account[0]);
        ethereum.on('accountsChanged', async (accountnew) => {
            setAccount(accountnew[0]);
        })
    }

    const webcamRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        runPosenet();
        setActivewebcam(false);
        const hiddendiv = document.getElementById('hidp');
        hiddendiv.style.display = "none";
    }, []);


    const runPosenet = async () => {
        await tf.setBackend("webgl");

        const net = await posenet.load();

        detectPose(net);
    };

    const detectPose = async (net) => {
        if (
            webcamRef.current &&
            webcamRef.current.video.readyState === 4
        ) {
            const video = webcamRef.current.video;
            const videoWidth = video.videoWidth;
            const videoHeight = video.videoHeight;

            video.width = videoWidth;
            video.height = videoHeight;

            const pose = await net.estimateSinglePose(video);
            const span = document.getElementById('span')

            if (pose && pose.keypoints) {
                drawPose(pose, videoWidth, videoHeight, canvasRef);
                console.log(span.innerHTML);
                if (span.innerHTML == "WristCheck") {
                    detectActivity(pose);
                    if (!Win) {
                        setTimeout(() => {
                            const canvas34 = document.getElementById('canvas');
                            setActivewebcam(false);
                            canvas34.style.display = "none";
                            const hiddendiv = document.getElementById('hidp');
                            hiddendiv.style.display = "block";
                        }, 120000)
                    }
                } if (span.innerHTML == "StoppyFloppy") {
                    detectReverseActivity(pose);
                }
            }

        }

        requestAnimationFrame(() => {
            detectPose(net);
        });
    };

    const drawPose = (pose, videoWidth, videoHeight, canvasRef) => {
        const ctx = canvasRef.current.getContext('2d');
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;

        drawKeypoints(pose.keypoints, ctx);
    };

    const drawKeypoints = (keypoints, ctx) => {
        for (let i = 0; i < keypoints.length; i++) {
            const keypoint = keypoints[i];

            if (keypoint.score > 0.2) {
                const { y, x } = keypoint.position;
                ctx.beginPath();
                ctx.arc(x, y, 5, 0, 2 * Math.PI);
                ctx.fillStyle = 'red';
                ctx.fill();
            }
        }
    };

    const MIN_WRIST_Y = 300;

    function detectActivity(pose) {
        const leftWrist = pose.keypoints[9];
        const rightWrist = pose.keypoints[10];

        if (!leftWrist || !rightWrist) return;

        const leftWristY = leftWrist.position.y;
        const rightWristY = rightWrist.position.y;

        if (leftWristY < MIN_WRIST_Y && rightWristY < MIN_WRIST_Y) {
            setWristCount(prevCount => prevCount + 1);
        }
    }

    const NumArray = ['1000', '10000', '20000', '80000', '3000'];
    const element = NumArray[0];

    const createConfetti = () => {
        var duration = 15 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }

    if (WristCount == element) {
        console.log("Superab");
        setWristCount(0);
        const canvas34 = document.getElementById('canvas');
        setActivewebcam(false);
        canvas34.style.display = "none";
        setWin(true);
        createConfetti();
    }




    const ListNft = async (contract) => {

        console.log("Account is : " + Account);

        const metadata = {
            name: "Aditya NFT",
            description: "Minted By Posify",
            image: "https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        }

        const providers = new ethers.providers.Web3Provider(window.ethereum);

        const Signer = new ethers.Wallet("5ad7f7823ac4a9518b1ce47b007c63c150bc31382d6878d48cce4abb2cc707ef", providers);

        const sdkt = ThirdwebSDK.fromSigner(Signer);

        sdkt.wallet.connect(Signer);

        const contractnew = await sdkt.getContract("0x124bF5CdbFf3eec1508970cF3704f53BB2fa9cA9");

        await contractnew.roles.grant("minter", Account);

        const payload = {
            to: Account,
            metadata: metadata,
            price: '0.01'
        }
        const signpayload = await contract.erc721.signature.generate(payload);
        const tx = await contract.erc721.signature.mint(signpayload);
        console.log(tx);
    }


    const MintNFT = async () => {
        if (Win) {
            await ListNft(contract);
        }
    }


    function detectReverseActivity(pose) {
        const leftWrist = pose.keypoints[9];
        const rightWrist = pose.keypoints[10];

        if (!leftWrist || !rightWrist) return;

        const leftWristY = leftWrist.position.y;
        const rightWristY = rightWrist.position.y;

        if (leftWristY > MIN_WRIST_Y && rightWristY > MIN_WRIST_Y) {
            setWristStopCount(prevCount => prevCount + 1);
        } else {
            console.log('Stop Count' + WristStopCount);

        }
    }


    return (
        <>
            <Spline scene="https://prod.spline.design/DzO6-Lg9V093iphf/scene.splinecode" style={{ marginTop: "0px" }} />

            <div className="container">

                <div className="welcome-div">
                    <h1>Hello!! Welcome to Game Zone And Click the Fish</h1>

                </div>

                <div className="join-awesomeness">
                    <h2>Join Awesomeness</h2>
                    <div className="input-group">
                        <input type="text" placeholder="Name" className="input-field" required onChange={NameChange} />
                        <input type="email" placeholder="Email" className="input-field" required onChange={EmailChange} />
                        <button className="join-button" onClick={FormSubmitted}>Join</button>
                    </div>
                </div>

            </div>

            <div className='container3' id='cont3'>
                {Name && Email && But === "True" ? <><p>Your Game is <span id='span'>{Game}</span></p>
                    <a href='https://www.loom.com/share/87013f63230e4d0aabe70a637c99db42?sid=9dc29750-a114-4c39-b3d0-95f48bd9d03a' target='_blank' rel="noreferrer" >{!Win && <h3>Check Tutorials</h3>}</a></> : <p>Please Fill Form</p>}
            </div>

            <div className='container2'>

                <div className="game-section">

                    {But == "True" && !Win && <div className="card12" id='webcam1'>

                        <div className="card-content12">
                            {!Win && <><p className="card-title12">Destiny Decider</p>
                                <p className="card-title12">Target is: {Game == 'WristCheck' ? element : element}</p>
                                <p className="card-title12">Count is :{Game == 'WristCheck' ? WristCount : WristStopCount}</p></>}
                        </div>
                    </div>}


                    {Win && <><div style={{ display: "flex", margin: "auto", width: "fit-content" }}><div className="notificationCard">
                        <p className="notificationHeading">Congratulations!!{Name}</p>
                        <p className="notificationPara">You Won Some Rewards From Us</p>
                    </div></div></>}


                    {!Win && <><div className="webcam-container" id='Wert'>

                        {Activewebcam && <Webcam style={{ marginLeft: "100px", marginTop: "100px", zIndex: "9" }} ref={webcamRef} className='overlay' />}

                        <canvas ref={canvasRef} className='overlay' style={{ marginLeft: "100px", marginTop: "-700px", marginBottom: "24px", zIndex: "9" }} id='canvas' />

                        <p className='card456 card-title12' id='hidp' style={{ display: "block", margin: "auto", width: "fit-content", fontWeight: "bold" }}>
                            Better Luck Next Time My Friend
                        </p>

                    </div>
                    </>}

                </div>
            </div>

            {Win && <div className='container3'>

                <p>Rewards</p>

                <div className="flex-container">
                    <div className="shirt-card">
                        <img className="custom-image" src="https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image" />
                        <div className="shirt-details">
                            <div className="shirt-name">Aditya NFT</div>
                            <div className="shirt-description">
                                Minted By Posify Aditya Suryawanshi
                            </div>
                        </div>
                        <div className="custom-buttons">
                            <button className="custom-button" onClick={MintNFT}>Mint</button>
                        </div>
                    </div>
                </div>

            </div>}

            <GoToTop />
        </>
    )
}

export default GamePage