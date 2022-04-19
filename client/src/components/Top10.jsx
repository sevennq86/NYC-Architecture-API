import { Link } from 'react-router-dom';

export default function Top10({top10}) {

  return (
    <div>
      <Link to={`/top10/${top10._id}`}>
        <p>{top10.name}</p>
        <img className='top10-image' src={top10.image}/>
      </Link>
    </div>
  )
}