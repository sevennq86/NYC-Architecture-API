import { Link } from 'react-router-dom';

export default function Iconic({iconic}) {

  return (
    <div>
      <Link to={`/iconic/${iconic._id}`}>
        <p>{iconic.title}</p>
      </Link>
      
    </div>
  )
}