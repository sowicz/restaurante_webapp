
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./../App"
import Dashboard from "../Pages/Dashboard";

export default function Routing() {
  
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}