import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import {Admin} from "./pages/Admin";
import { Vendor } from "./pages/Vendor";
import {User} from "./pages/User";
import {Login} from "./pages/Login";
import { Vendor2page } from "./pages/Vendor2page";
import { User2page } from "./pages/User2page";



function App() {

 
  

  return (
    <div className="">
      <Navbar />

      <Routes>

        <Route path="/" element= {<Home/>} />
        <Route path="/login" element={<Login/>}/>
         <Route path="/admin" element={<Admin/>}/>
         <Route path="/vendor" element={<Vendor/>}/>
         <Route path="/user" element={<User/>}/>
         <Route path="/vendor2page" element={<Vendor2page/>}/>
         <Route path="/user2page" element={<User2page/>}/>

      </Routes>

    </div>
    )
}

export default App;
