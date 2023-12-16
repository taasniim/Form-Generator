import React,{useState, useEffect} from "react";
import grapesjs from "grapesjs";
import gjsPersetWepage from"grapesjs-preset-webpage";
function App() {
  const [editor,setEditor] = useState(null);
  useEffect(() =>{
    const editor = grapesjs.init({
      container:"#editor",
      plugins:[gjsPersetWepage],
      pluginsOpts:{
        gjsPersetWepage:{},
      }
    });
    setEditor(editor);
  },[]);

  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}

export default App;
