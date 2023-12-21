const FormDetails =({form,OnDelete})=>{
    return(

        <div className="FormDetails">
            <h4> {form.title}</h4>   
            <h5> Fields :</h5>  
            <u1>
                {form.fields.map((field,index)=>
                (
                    <li key={index}> 
                    {field.label}</li>
               ) )}
            </u1>
            <p>Published: {form.publish ? "Yes" : "No"}</p> 
            <button className="delete-button"onClick={OnDelete} >
        Delete
      </button>
           
            
        </div>
    )
} 

export default FormDetails;