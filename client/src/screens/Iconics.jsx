import { useState, useEffect } from 'react';
import { getIconics} from '../services/iconic.js';
import Iconic from '../components/Iconic.jsx';



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
      <h1>Iconics</h1>
      {iconics.map((iconicData) => (
        <Iconic key={iconicData._id} iconic={iconicData}/>
      ))}
    </div>
  )
}
