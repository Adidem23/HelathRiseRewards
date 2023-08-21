import Maint from "./Components/Maint";
import { Route, Routes } from 'react-router-dom';
import GamePage from "./Components/GamePage";
import { ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { ethers } from "ethers";


function App() {

  const ActiveChain = 80001;

  return (
    <>
      <ThirdwebSDKProvider activeChain={ActiveChain} signer={new ethers.providers.Web3Provider(window.ethereum).getSigner()} clientId="5fb26c268ed64fb73d9fb6010411dca9" >
        <Routes>
          <Route path="/" Component={Maint} />
          <Route path="/games" Component={GamePage} />
        </Routes>
      </ThirdwebSDKProvider>
    </>
  )
}

export default App
