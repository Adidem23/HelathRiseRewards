import AllComp from "./Components/AllComp";
import GamePage from "./Components/GamePage";
import { Route, Routes } from 'react-router-dom';
import { ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { ethers } from 'ethers';

function App() {

  const ActiveChainId = 80001;

  return (
    <>
      <ThirdwebSDKProvider activeChain={ActiveChainId} signer={new ethers.providers.Web3Provider(window.ethereum).getSigner()} clientId="5fb26c268ed64fb73d9fb6010411dca9">
        <Routes>
          <Route path="/" Component={AllComp} />
          <Route path="/games" Component={GamePage} />
        </Routes>
      </ThirdwebSDKProvider>
    </>
  )
}

export default App
