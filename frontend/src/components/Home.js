import React, { useEffect, useState } from "react";
import axios from "axios";
import FormDetails from './FormDetails'  
import Navbar from "./Navbar";
const Home = () => {
  const [forms, setForms] = useState([]);
 

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/forms'); 
        
        setForms(response.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchForms();
  }, []); 
  const deletecreatedforms=async(formId)=>{ 
        await axios.delete(`http://localhost:4000/api/forms/${formId}`);  
        const updateFormHome=forms.filter(form=>form._id!==formId);
        setForms(updateFormHome);};

  return (
    <div className="Home"> 
    <Navbar/>
      <h2>Welcome, check out your forms! </h2>

      <div className="forms" style={{ display: "flex", flexWrap: "wrap" }}>
       
          {forms.map((form) => (
            <FormDetails key={form._id} form={form} 
            OnDelete={()=>deletecreatedforms(form._id)} />
            
          ))}
        
      </div>
    </div>
  );
};

export default Home;
