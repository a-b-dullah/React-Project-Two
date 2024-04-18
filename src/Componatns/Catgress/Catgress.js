import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Catgress() {
const [state, setstate] = useState([]);
axios.get("Js/db.json").then((res) => setstate(res.data.Catgress), []);
function Delete(id) {
Swal.fire({
title: `Are You sure to Delete ${id} ?`,
showCancelButton: true,
}).then((data3) => {
if (data3.isConfirmed) {
axios
.delete(`http://localhost:8000/Catgress/${id}`)
.then((res) => console.log(res));
}
});
}
return (
<div>
<h3>Categress page</h3>
<Link to={"/AddCategress"} className="btn btn-success pb-0  ">
Add Categress

</Link>
<table className="table table-striped">
<thead>
<tr>
<th>Id</th>
<th> title</th>
<th>price</th>
<th> Options</th>
</tr>
</thead>
<tbody>
{state.map((categress) => {
return (
<tr key={categress.id}>
<td>{categress.id}</td>
<td>{categress.title.slice(0.39)}</td>
<td>{categress.price}</td>
<td>
<button
onClick={() => Delete(categress.id)}
type="button"
className="btn btn-primary me-1 "
>
Delete
</button>
<Link
to={`/ViewCategress/${categress.id}`}
type="button"
className="btn btn-danger me-1"
>
View
</Link>
<Link
to={`/EditCatgress/${categress.id}`}
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
