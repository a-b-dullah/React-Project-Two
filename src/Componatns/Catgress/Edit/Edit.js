import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditCategress() {
  const [data, setdata] = useState("");
  const [title, setitle] = useState("");
  const [price, setprice] = useState("");
  let params = useParams();
  let navagete = useNavigate();
  window.onload = () => {
    document.querySelector("input").focus();
  };
  useEffect(() => {
    fetch(`http://localhost:8000/Catgress/${params.id}`)
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  function Form(e) {
    e.preventDefault();
    axios.put(`http://localhost:8000/Catgress/${params.id}`, {
      title: title,
      price: price,
    });
    navagete("/Catgress");
  }
  return (
    <div className="p-1">
      <form onSubmit={Form}>
        <div className="mb-3 ">
          <h2 className="form-label">Edit Some Prodat</h2>
          <label className="form-label fs-3">title</label>

          <input
            type="text"
            className="form-control"
            id="title"
            placeholder={data.title}
          />
        </div>
        <div className="mb-3">
          <label className="form-label fs-3">price</label>
          <input
            placeholder={data.price}
            type="text"
            className="form-control"
            id="prodact price"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Edit Prodact
        </button>
      </form>
    </div>
  );
}
