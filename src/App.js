import Loading from "./templates/loading/Loading";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import "./sass/main.scss";
import Course from "./pages/Course/Course";
import Our from "./pages/Our/Our";
import SignIn from "./pages/Sign/SignIn";
import SignUp from "./pages/Sign/SignUp";
import Sign from "./pages/Sign/Sign";

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate Component={Home} />} />
        <Route path="/contact" element={<HomeTemplate Component={Contact} />} />
        <Route path="/courses" element={<HomeTemplate Component={Course} />}>
        </Route>
        <Route path="course/:id" element={<HomeTemplate Component={Detail} />}></Route>


        <Route path="/ourteam" element={<HomeTemplate Component={Our} />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/signup" element={<Sign />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;