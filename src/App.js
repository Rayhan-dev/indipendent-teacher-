import "./App.css";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";
import SignUp from "./Components/SignUp/SignUp";
import CheckOut from "./Components/CheckOut/CheckOut";
import RequiredAuth from "./Components/RequiredAuth/RequiredAuth";

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
          element={<ServiceDetails></ServiceDetails>}
        ></Route>
        <Route
          path="/checkout"
          element={
            <RequiredAuth>
              <CheckOut></CheckOut>
            </RequiredAuth>
          }
        ></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
