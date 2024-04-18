import { Route, Routes } from "react-router-dom";
import Header from "./Componatns/Header/Header";
import SidBar from "./Componatns/SideBar/SiderBar";
import About from "./Componatns/About/About";
import Catgress from "./Componatns/Catgress/Catgress";
import Prodact from "./Componatns/Prodact/Pordactr";
import AddProdact from "./Componatns/Prodact/AddProdact/AddProdact";
import Edit from "./Componatns/Prodact/Edit/Edit";
import View from "./Componatns/Prodact/View/View";
import AddCategress from "./Componatns/Catgress/AddCategress";
import Viewcategress from "./Componatns/Catgress/View";
import EditCategress from "./Componatns/Catgress/Edit/Edit";

export default function App() {
  return (
    <div>
      <Header />
      <div className="row W-100">
        <div className="col-3 p-0">
          <SidBar />
        </div>
        <div className="col-9 ">
          <Routes>
            <Route path="Prodact" element={<Prodact />}></Route>
            <Route path="Catgress" element={<Catgress />}></Route>
            <Route path="About" element={<About />}></Route>
            <Route path="Addprodact" element={<AddProdact />}></Route>
            <Route path="Edit/:id" element={<Edit />}></Route>
            <Route path="View/:id" element={<View />}></Route>
            <Route path="AddCategress" element={<AddCategress />}></Route>
            <Route path="ViewCategress/:id" element={<Viewcategress />}></Route>
            <Route path="EditCatgress/:id" element={<EditCategress />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
