import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/top10">Top 10</NavLink>
        <NavLink to="/iconics">Iconic</NavLink>
        <NavLink to="/your-own">Your Own Iconic Location</NavLink>
      </div>
    </nav>
  )
}
