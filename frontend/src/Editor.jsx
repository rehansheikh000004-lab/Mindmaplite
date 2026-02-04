import { useParams } from "react-router-dom";
import { useState } from "react";
import { API } from "./api";

export default function Editor(){
  const { id } = useParams();
  const [text,setText]=useState("");

  const add=async()=>{
    await API.post(`/api/maps/${id}/node`,{text});
    alert("Node added");
  };

  return (
    <div>
      <input placeholder="Node text" onChange={e=>setText(e.target.value)}/>
      <button onClick={add}>Add Node</button>
    </div>
  );
}
