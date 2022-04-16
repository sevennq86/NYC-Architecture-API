import "./App.css";
import Nav from "./components/Nav"
import Iconics from "./screens/Iconics";
import IconicCreate from "./screens/IconicCreate";
import IconicDetail from "./screens/IconicDetail";
import IconicEdit from "./screens/IconicEdit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <Nav />
      <Routes>
        <Route path="/iconic" element={<Iconics />} />
        <Route path="/iconic/:id" element={<IconicDetail />} />
        <Route path="/your-own" element={<IconicCreate />} />
        <Route path="/iconics/:id/edit" element={<IconicEdit />} />
        


      </Routes>
      
    </div>
  );
}

export default App;
