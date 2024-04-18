import { Link } from "react-router-dom";
import "./style.css"

export default function SidBar(){
return(
<div className=" Sidbar">
<ul className="list-unstyled p-4  ">
<li className="mb-4 ">
    <Link className="text-decoration-none" to={"/Prodact"}>Get All Prodact</Link></li>
<li>
<Link className="text-decoration-none" to={"/Catgress"}>Get All Categress</Link></li>
</ul>
</div>
)
}