import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewData from "../Prodact/View/ViewData";

export default function Viewcategress() {
  let params = useParams();
  const [state, setstat] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/Catgress/${params.id}`)
      .then((res) => res.json())
      .then((data) => setstat(data));
  });

  return (
    <div>
      <ViewData state={state} />
    </div>
  );
}
