import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Components/Banner/Banner";
import ServiceSection from "./Components/ServiceSection/ServiceSection";
import Foorter from "./Components/Footer/Foorter";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/homePage" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
