import { useState, useEffect } from "react";
import { getIconics } from "../services/iconic";
import Iconic from "../components/Iconic.jsx";
import { Link } from "react-router-dom";

export default function Iconics({ setHeader }) {
  const [iconics, setIconics] = useState([]);

  useEffect(() => {
    const fetchIconics = async () => {
      const allIconics = await getIconics();
      setIconics(allIconics);
    };
    setHeader("List Of Iconic Locations");
    fetchIconics();
  }, []);

  return (
    <div>
      <h3><Link to="/your-own">Your Own Iconic Location</Link></h3> 
      <div className="iconics-screen">
        {iconics.map((iconicData) => (
          <div>
            <div className="each-iconic-div">
              <Iconic key={iconicData._id} iconic={iconicData} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
