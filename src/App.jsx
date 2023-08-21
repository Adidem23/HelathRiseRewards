import Maint from "./Components/Maint";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" Component={Maint} />
        <Route path="/Login" Component={Login} />
        <Route path="/SignUp" Component={SignUp} />
      </Routes>
    </>
  )
}

export default App
