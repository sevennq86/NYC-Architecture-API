import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createIconic } from "../services/iconic";

export default function IconicCreate() {
  const [iconic, setIconic] = useState({
    title: "",
    architecturalStyle: "",
    year: "",
    image: "",
  })

  let navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target
    setIconic({
      ...iconic,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await createIconic(iconic)
    navigate("/iconic", { replace: true })
  }

  return (
    <div className="create-form">
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
      <input
        placeholder="Image link"
        name="image"
        value={iconic.image}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      </form>
      </div>
  )
}