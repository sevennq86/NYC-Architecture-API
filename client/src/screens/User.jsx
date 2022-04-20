import { useState, useEffect } from "react";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import SignUp from "../components/SignUp";

export default function Users({
  handleNameChange,
  handleEmailChange,
  handlePasswordChange,
  handleSignUp,
  setSignedIn,
  handleLogIn

}) {
  return (
    <div>
      <SignIn
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleLogIn={handleLogIn} 
      />
      <SignOut
       setSignedIn={setSignedIn}
      />
      <SignUp
       handleNameChange={handleNameChange}
       handleEmailChange={handleEmailChange}
       handlePasswordChange={handlePasswordChange}
       handleSignUp={handleSignUp}
      />
    </div>
  );
}
