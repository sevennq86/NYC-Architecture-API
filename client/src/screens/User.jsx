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

      <div className="user-screen-container">
      <div className="user-screen-signin">
      <SignIn
        handleNameChange={handleNameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleLogIn={handleLogIn} 
        />
      </div>
      
        
       
      <div className="user-screen-signup">
      <SignUp
       handleNameChange={handleNameChange}
       handleEmailChange={handleEmailChange}
       handlePasswordChange={handlePasswordChange}
       handleSignUp={handleSignUp}
        />
        </div>

        <div className="user-screen-signout">
      <SignOut
       setSignedIn={setSignedIn}
        />
          </div>
          
      </div>
    </div>
  );
}
