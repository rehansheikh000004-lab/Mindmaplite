import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Editor from "./Editor";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/editor/:id" element={<Editor/>}/>
      </Routes>
    </BrowserRouter>
  );
}
