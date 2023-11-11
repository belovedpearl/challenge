import React from 'react'

function NavBarChild(props) {
  return (
    <div>
        {props.isLoggedIn ? (
            <form>
              <label htmlFor='user'>Username: </label>
              <input type='text' placeholder='Username' id='user' required></input>
              <label htmlFor='pwd'>Password: </label>
              <input type='password' placeholder='Password' id='pwd' required></input>
              <button onClick={props.handleClick}>
                Submit
              </button>
            </form>
          ) : (
            <button onClick={props.handleClick}>
              Log in
            </button>
          )} 
    </div>
  )
}

export default NavBarChild