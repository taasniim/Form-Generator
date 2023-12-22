import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'; 
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


import CreateForm from './components/CreateForm'; 


function App() {
  return ( 
    
  <BrowserRouter> 
  
  <Routes> 
    <Route path="/" element={<Home/>}/> 
    <Route path="/create" element={<DndProvider backend={HTML5Backend}>
      {<CreateForm/>}
    </DndProvider>}/>
    <Route/>

    </Routes>
    </BrowserRouter>
     
    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
