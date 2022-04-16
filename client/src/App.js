import "./App.css";
import Nav from "./components/Nav"
import Iconics from "./screens/Iconics";
import IconicDetail from "./screens/IconicDetail.jsx"
import IconicEdit from "./screens/IconicEdit"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <Nav />
      <Routes>
        <Route path="/iconics" element={<Iconics />} />
        <Route path="/iconic/:id" element={<IconicDetail />} />
        <Route path="/iconics/:id/edit" element={<IconicEdit/>} />
      </Routes>
    </div>
  );
}

export default App;
