import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Portal1 from "./Portals/Portal1";
import Portal2 from "./Portals/Portal2";
import Dashboard from "./Components/Dashboard";
import { ToastContainer } from "react-toastify";
import './App.css';


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="user/:id" element={<Portal1 />} />
        <Route path="post/:id" element={<Portal2 />} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>


  );
}

export default App;
