import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddProdact(){
const [price,setData]=useState("")
const [title,setData2]=useState("")
let navagete=useNavigate()
function Form(e){  
e.preventDefault()
axios.post("http://localhost:8000/Prodact",{
title,price
}).then(data=> {console.log(data)
    navagete("/Prodact")
}

); 
}

return(
<form  onSubmit={Form}>
<div className="mb-3 ">
<h2 htmlFor="title" className="form-label">Add Prodat</h2>
<input type="text" className="form-control" id="title" placeholder="title"  onChange={(e)=>setData(e.target.value)} />
</div>
<div className="mb-3">
<label htmlFor="prodact price" className="form-label">price</label>
<input  type="text" className="form-control"   id="prodact price" placeholder="Price"   onChange={(e)=>setData2(e.target.value)}/>
</div>
<button type="submit" className="btn btn-primary">Add Prodact</button>
</form>
)
} 

export default AddProdact