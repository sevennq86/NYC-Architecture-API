import { Link } from 'react-router-dom';

export default function Iconic({iconic}) {

  return (
    <div>
      <div className='iconic-component'>
       <Link to={`/iconic/${iconic._id}`}>
        <p className='iconic-component-title'>{iconic.title}</p>
        <img className='iconic-component-image' src={iconic.image}/>
        </Link>
      </div>
    </div>
  )
}