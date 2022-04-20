import { Link } from 'react-router-dom';

export default function Top10({top10}) {

  return (
    <div className='top10-component'>
      <Link to={`/top10/${top10._id}`}>
        <p className='top10-component-title'>{top10.name}</p>
        <img className='top10-component-image' src={top10.image}/>
      </Link>
    </div>
  )
}