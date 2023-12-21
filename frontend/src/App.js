import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'; 


import CreateForm from './components/CreateForm'; 
import Navbar from './components/Navbar';

function App() {
  return ( 
    
  <BrowserRouter> 
  
  <Routes> 
    <Route path="/" element={<Home/>}/> 
    <Route path="/create" element={<CreateForm/>}/>
    <Route/>

    </Routes>
    </BrowserRouter>
     
    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
