import "./App.css";
import Nav from "./components/Nav"
import Iconics from "./screens/Iconics";
import IconicCreate from "./screens/IconicCreate";
import IconicDetail from "./screens/IconicDetail";
import IconicEdit from "./screens/IconicEdit";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [header, setHeader] = useState("Nyc Arc")


  return (
    <div className="App">
      <h1 className="main-header">{header}</h1>
      <Nav />
      <Routes>
        
        <Route path="/iconic" element={<Iconics setHeader={setHeader}/> }  />
        <Route path="/iconic/:id" element={<IconicDetail />} />
        <Route path="/your-own" element={<IconicCreate />} />
        <Route path="/iconics/:id/edit" element={<IconicEdit />} />
        


      </Routes>
      
    </div>
  );
}

export default App;
