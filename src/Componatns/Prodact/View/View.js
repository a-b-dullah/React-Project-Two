import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewData from "./ViewData";

export default function View() {
  const paar = useParams();
  const [state,setstate]=useState([])
  useEffect(() => {
    fetch(`http://localhost:8000/Prodact/${paar.id}`)
      .then((res) => res.json())
      .then((data) =>setstate(data));
  },[])
    return (
      <div>
        <ViewData state={ state} />
      </div>
    );
}
