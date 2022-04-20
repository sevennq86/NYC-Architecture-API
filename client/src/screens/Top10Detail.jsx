import { useState, useEffect } from 'react';
import { Top10, getTop10 } from '../services/top10';
import { Link, useParams, useNavigate } from "react-router-dom";

export default function Top10Detail() {
  const [top10, setTop10] = useState({})
  let { id } = useParams()
  // let navigate = useNavigate()

  useEffect(() => {
    const fetchTop10 = async () => {
      let oneTop10 = await getTop10(id)
      setTop10(oneTop10)
    }

    fetchTop10()
  }, [id])

  return (
    <div className="top10Detail-screen-container">
      <h2 className='top10Detail-screen-title'>{top10.name}</h2>
      <div className='top10Detail-screen-body'>
      <h5>Opened: {top10.opened}</h5>
      <h5>Top Floor:{top10.topFloor}</h5>
      <h5>Height: {top10.height}</h5>
      <h5>Floor Area:{top10.floorArea}</h5>
        <h5>Architect: {top10.architect}</h5>
        </div>
      <div className='top10Detail-screen-container-img' >
      <img className='top10Detail-screen-image' src={top10.image} />
      </div>
    
    </div>
  )
}