import React from 'react'

export default function SignOut({setSignedIn}) {

  const handleLogOut = (e) => { 
    e.preventDefault()
    setSignedIn(false)
    //want to set logged out status here
    localStorage.clear()
  }
  return (
    <div>
      <div>
        <h1>Log Out</h1>

        <form>
          <button className='log-off' value='Log-Out' type='submit' onClick={handleLogOut}>Log Out</button> 
        </form>
      </div>
    </div>
  )
}