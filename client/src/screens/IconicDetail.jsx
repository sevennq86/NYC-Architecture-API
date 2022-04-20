import { useState, useEffect } from "react";
import { deleteIconic, getIconic } from "../services/iconic.js";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function IconicDetail() {
  const [iconic, setIconic] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchIconic = async () => {
      let oneIconic = await getIconic(id);
      setIconic(oneIconic);
    };

    fetchIconic();
  }, [id]);

  return (
    <div>
      <div className="iconicDetail-screen-container">
        <h2 className="iconicDetail-screen-title">{iconic.title}</h2>
        <div className="iconicDetail-screen-body">
        <h5>Architectural Style: {iconic.architecturalStyle}</h5>
        <h5>Year: {iconic.year}</h5>
          <p><b>About:</b> {iconic.about}</p>
          <div className="iconicDetail-screen-edit-delete-btns">
          <button className="iconicDeatail-edit-btn">
            <Link to={`/iconics/${iconic._id}/edit`}>Edit Iconic Sites</Link>
          </button>
            
          <button className="iconicDetail-delete-btn" 
            onClick={() => {
              deleteIconic(iconic._id);
              navigate("/iconic", { replace: true });
            }}
           >
            Delete Iconic Site
          </button>
        </div>
        </div>
        <div className="iconicDetail-screen-img-container">
          <img className="iconicDetail-screen-img" src={iconic.image} />
        </div>
        
      </div>
    </div>
  );
}
