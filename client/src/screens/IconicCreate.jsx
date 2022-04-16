import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createIconic } from "../services/iconic";

export default function IconicCreate() {
  const [iconic, setIconic] = useState({
    _id: "",
    title: "",
    architecturalStyle: "",
    year: "",
    about: "",
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
    navigate("/iconics", { replace: true })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="id"
        name="_id"
        value={iconic._id}
        onChange={handleChange}
        required
        autoFocus
      />
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
      <button type="submit">Submit</button>
    </form>
  )
}