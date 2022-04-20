import "./App.css";
import Nav from "./components/Nav";
import Iconics from "./screens/Iconics";
import IconicCreate from "./screens/IconicCreate";
import IconicDetail from "./screens/IconicDetail";
import IconicEdit from "./screens/IconicEdit";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Top10 from "./screens/Top10";
import Top10Detail from "./screens/Top10Detail";
import HomeScreen from "./screens/Home";
import jwt_decode from "jwt-decode";
import axios from "axios";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import User from "./screens/User";

function App() {
  const [header, setHeader] = useState("Nyc Arc");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setSignedIn(true);
    setUserName(name);
    //use this for deployed database
    // .post("https://architecture-api-group7.herokuapp.com/signup"
//local development
    // .post("http://localhost:3000/signup"
    axios
      // .post("http://localhost:3000/signup", {
        .post("https://architecture-api-group7.herokuapp.com/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.token = res.data.token;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    setSignedIn(true);
    //use this for deployed database
    // .post("https://architecture-api-group7.herokuapp.com/login"
    axios
      // .post("http://localhost:3000/login"
      .post("https://architecture-api-group7.herokuapp.com/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.token = res.data.token;
        const test = jwt_decode(res.data.token);
        setUserName(test.name);
        alert(`${test.name} you signed in`)
      })
      .catch((err) => {
        console.log(err);
        alert("WRONG PASS")
      })
      
  };

  return (
    <div className="App">
      <h1 className="main-header">{header}</h1>
      <Nav />
      <Routes>
        <Route path="/iconic" element={<Iconics setHeader={setHeader} />} />
        <Route path="/iconic/:id" element={<IconicDetail />} />
        <Route path="/your-own" element={<IconicCreate />} />
        <Route path="/iconics/:id/edit" element={<IconicEdit />} />
        <Route path="/top10" element={<Top10 setHeader={setHeader} />} />
        <Route path="/top10/:id" element={<Top10Detail />} />
        <Route path="/home" element={<HomeScreen setHeader={setHeader} />} />
        <Route
          path="/users"
          element={
            <User
              handleNameChange={handleNameChange}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleSignUp={handleSignUp}
              handleLogIn={handleLogIn}
              setSignedIn={setSignedIn}
            />
          }
        />

        <Route
          path="/signUp"
          element={
            <SignUp
              handleNameChange={handleNameChange}
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleSignUp={handleSignUp}
            />
          }
        />
        <Route
          path="/signIn"
          element={
            <SignIn
              handleEmailChange={handleEmailChange}
              handlePasswordChange={handlePasswordChange}
              handleLogIn={handleLogIn}
            />
          }
        />
        <Route
          path="/signOut"
          element={<SignOut setSignedIn={setSignedIn} />}
        />
      </Routes>
    </div>
  );
}

export default App;
