import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import SignUp from "./Components/SignUp/SignUp";
import RequiredAuth from "./Components/RequiredAuth/RequiredAuth";
import ServiceCheckOut from "./Components/ServiceCheckOut/ServiceCheckOut";
import Aboutme from "./Components/Aboutme/Aboutme";
import Blog from "./Components/Blog/Blog";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/homePage" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<SignUp></SignUp>}></Route>
        <Route
          path="/service/:serviceId"
          element={
            <RequiredAuth>
            <ServiceCheckOut></ServiceCheckOut>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/aboutme" element={<Aboutme></Aboutme>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
