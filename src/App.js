import Loading from "./templates/loading/Loading";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail.jsx";
import HomeTemplate from "./templates/HomeTemplate/HomeTemplate";
import "./sass/main.scss";
import Course from "./pages/Course/Course";
import Our from "./pages/Our/Our";
import Sign from "./pages/Sign/Sign";
import GetPass from "./pages/Sign/GetPass";
import EnterCode from "./pages/Sign/EnterCode";
import Saved from "./pages/Saved/Saved";
import Admin from "./pages/Admin/Admin";
import Contact from "./sass/Pages/Contact/Contact";


function App() {
  return (
<div>
  <Loading/>
     <BrowserRouter >
      <Routes>
        <Route path="/" element={<HomeTemplate Component={Home} />} />
      <Route path="/admin" element={<HomeTemplate Component={Admin} />} />

        <Route path="/courses" element={<HomeTemplate Component={Course} />}>
        </Route>
        <Route path="course/:id" element={<HomeTemplate Component={Detail} />}></Route>

        <Route path="/saved/:id" element={<HomeTemplate Component={Saved} />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/contact" element={<HomeTemplate Component={Contact} />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/getpass" element={<GetPass />} />
        <Route path="/entercode" element={<EnterCode />} />
      </Routes>
    </BrowserRouter> 
    </div>

  );
}

export default App;
