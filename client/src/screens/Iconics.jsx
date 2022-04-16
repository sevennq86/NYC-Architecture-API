import { useState, useEffect } from 'react';
import { getIconics } from '../services/iconic';
import Iconic from '../components/Iconic.jsx';
import { Link } from "react-router-dom";



export default function Iconics() {
  const [iconics, setIconics] = useState([])
  
  useEffect(() => {
    const fetchIconics = async () => {
      const allIconics = await getIconics()
      setIconics(allIconics)
    }

    fetchIconics()
  }, [])

  return (
    <div>
      <h1>List Of Iconic Locations</h1>
      {iconics.map((iconicData) => (
        <div>
        <Iconic key={iconicData._id} iconic={iconicData} />
          
            </div>
      ))}
      
     <Link to="/your-own">Your Own Iconic Location</Link>

    </div>
  )
}
