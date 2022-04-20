import React from 'react';
import Home from "../components/Home";
import { useState, useEffect } from 'react';

export default function HomeScreen({setHeader}) {
   setHeader("Nyc Arc")
  
  return (
    <div>
    
      <Home />
    </div>
  )
}