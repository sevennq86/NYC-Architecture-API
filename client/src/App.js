import "./App.css";
import Nav from "./components/Nav"
import Iconics from "./screens/Iconics";
import IconicCreate from "./screens/IconicCreate";
import IconicDetail from "./screens/IconicDetail";
import IconicEdit from "./screens/IconicEdit";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Top10 from "./screens/Top10";
import Top10Detail from "./screens/Top10Detail";

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
        <Route path="/top10" element={<Top10 />} />
        <Route path="/top10/:id" element={<Top10Detail />} />
        


      </Routes>
      
    </div>
  );
}

export default App;
