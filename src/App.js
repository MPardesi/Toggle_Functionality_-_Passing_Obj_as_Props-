import React ,{useState} from "react";
import Prop from "./Prop.js";
import "./style.css";

export default function App() {

const [click,setClick]=useState(false);

let object={name:"PQR"};

function handleChange()
{
  setClick(!click);
}
  return (
    <div>
      <button onClick={handleChange}>
        {click ? "XYZ" : "ABC" }
      </button>
      <br/> <br/>
      <Prop object={object} />
    </div>
  );
}
