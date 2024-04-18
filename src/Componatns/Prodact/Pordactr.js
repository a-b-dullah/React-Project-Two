import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function Prodact() {
  const [state, setstate] = useState([]);
  function DeleteProdat(props) {
    Swal.fire({
      title: `Are You sure to Delete ${props} ?`,
      showCancelButton: true,
    }).then((data3) => {
      if (data3.isConfirmed) {
        axios
          .delete(`http://localhost:8000/Prodact/${props}`)
          .then((res) => console.log(res));
      }
    });
  }
  axios.get("Js/db.json").then((res) => setstate(res.data.Prodact), []);
  return (
    <div style={{ backgroundColor: "" }}>
      <h3>Prodact page</h3>
      <Link to="/AddProdact" type="button" className="btn btn-success">
        Add Prodact
      </Link>
      <table className="table  table-striped mt-3">
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>price</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {state.map((prodact) => {
            return (
              <tr key={prodact.id}>
                <td>{prodact.id}</td>
                <td>{prodact.title.slice(0, 30)}</td>
                <td>{prodact.price}</td>
                <td>
                  <button
                    onClick={() => DeleteProdat(prodact.id)}
                    type="button"
                    className="btn btn-primary me-1 "
                  >
                    Delete
                  </button>
                  <Link
                    to={`/View/${prodact.id}`}
                    type="button"
                    className="btn btn-danger me-1"
                  >
                    View
                  </Link>
                  <Link
                    to={`/Edit/${prodact.id}`}
                    type="button"
                    className="btn btn-success"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
