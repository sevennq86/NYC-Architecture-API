export default function SignIn({ handleEmailChange, handlePasswordChange, handleLogIn }) {
 
  return (
    <div>
        <h1>Sign In</h1>
      <form>
        <div>
          <label htmlFor='email'>Email </label>
          <input type='text' name="email" onChange={handleEmailChange}/>
        </div>
        <div>
          <label htmlFor='password'>Password </label>
          <input type='password' name="email" onChange={handlePasswordChange}/>
        </div>
        <div>
          <button className="sign-in-btn" type='submit' value="Submit" onClick={handleLogIn}>Sign In</button>
        </div>
      </form>
    </div>
  )
}