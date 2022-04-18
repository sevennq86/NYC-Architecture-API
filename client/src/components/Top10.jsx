import { Link } from 'react-router-dom';

export default function Top10({top10}) {

  return (
    <div>
      <Link to={`/top10/${top10._id}`}>
        <button className='top10-component-title'> { top10.title }</button>
        <h2>{top10.name}</h2>
      </Link>
    </div>
  )
}