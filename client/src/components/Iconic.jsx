import { Link } from 'react-router-dom';

export default function Iconic({iconic}) {

  return (
    <div>
      <div className='iconic-component'>
       <Link to={`/iconic/${iconic._id}`}>
       <button className='iconic-component-title'> {iconic.title}</button> 
        <img className='image' src={iconic.image}/>
        </Link>
      </div>
    </div>
  )
}