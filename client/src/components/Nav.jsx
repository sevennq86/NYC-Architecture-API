import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div className='nav'>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/top10">Top 10</NavLink>
        <NavLink to="/iconic">Iconic</NavLink>
        <NavLink to="/users">User</NavLink>
      </div>
    </nav>
  )
}
