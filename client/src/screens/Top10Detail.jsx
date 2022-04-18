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
    <div>
      
      <h2>{top10.name}</h2>
      <h5>{top10.constructionStarted}</h5>
      <h5>{top10.topFloor}</h5>
      <h5>{top10.height}</h5>
      <h5>{top10.floorArea}</h5>
      <h5>{top10.architect}</h5>
      {/* <div className='img-container' >
      <img className='inner-pic' src={top10.image} />
      </div> */}
    
    </div>
  )
}