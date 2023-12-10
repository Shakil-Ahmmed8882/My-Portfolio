import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className=" max-w-6xl mx-auto">
      
      <Navbar></Navbar>
      <div >
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
