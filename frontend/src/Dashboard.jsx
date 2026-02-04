import { API } from "./api";

export default function Dashboard(){
  const create=async()=>{
    const res=await API.post("/api/maps",{title:"My Map"});
    location.href="/editor/"+res.data._id;
  };

  return <button onClick={create}>Create MindMap</button>;
}
