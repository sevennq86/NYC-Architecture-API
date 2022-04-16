import { useState, useEffect } from 'react';
import { getIconic } from '../services/iconic.js';
import { Link, useParams, useNavigate } from "react-router-dom";

export default function IconicDetail() {
  const [iconic, setIconic] = useState({})
  let { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const fetchIconic = async () => {
      let oneIconic = await getIconic(id)
      setIconic(oneIconic)
    }

    fetchIconic()
  }, [id])

  return (
    <div>
      <h2>{iconic.title}</h2>
      <h5>{iconic.architecturalStyle}</h5>
      <h5>{iconic.year}</h5>
      <p>{iconic.about}</p>
      <div>
        {/* <button>
          <Link to={`/iconics/${iconic._id}/edit`}>Edit Iconic Sites</Link>
        </button>
        <button onClick={() => {
          deleteIconic(iconic._id)
          navigate("/iconics", { replace: true })
        }}>Delete Iconic Site</button>
         */}
      </div>
    
    </div>
  )
}
