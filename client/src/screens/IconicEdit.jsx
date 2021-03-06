import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateIconic, getIconic } from '../services/iconic';

export default function IconicEdit() {
  const [iconic, setIconic] = useState({
  
    title: "",
    architecturalStyle: "",
    year: "",
    about: "",
    image: "",
  })

  let navigate = useNavigate()
  const { id } = useParams()
  
  useEffect(() => {
    const fetchIconic = async () => {
      let oneIconic = await getIconic(id)
      setIconic(oneIconic)
    }

    fetchIconic()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setIconic({
      ...iconic,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateIconic(id, iconic)
    navigate("/iconic", { replace: true })
  }

  return (
    <div className='edit-form'>
    <form onSubmit={handleSubmit}>
     
      <input
        placeholder="Title"
        name="title"
        value={iconic.title}
        onChange={handleChange}
      />
      <input
        placeholder="Add a Style"
        name="architecturalStyle"
        value={iconic.architecturalStyle}
        onChange={handleChange}
      />
      <input
        placeholder="Year Built"
        name="year"
        value={iconic.year}
        onChange={handleChange}
      />
      <input
        placeholder="about this iconic place"
        name="about"
        value={iconic.about}
        onChange={handleChange}
      />
      <button className='iconic-delete-btn' type="submit">Submit</button>
      </form>
      </div>
  )
}