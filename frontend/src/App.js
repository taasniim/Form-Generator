// App.js
import React from 'react';
import Header from './components/Header';
import Template from './components/Template';
import Mainbody from './components/Mainbody';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import Formheader from './components/Formheader'
import Centeredtabs from './components/Tabs';
import Question_form from './components/Question_form';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/form' element={<>
          <Formheader/>
        <Centeredtabs/>
        <Question_form/>
        </>}/>
          
          <Route path='/' element={<>
            <Header />
            <Template />
            <Mainbody />
            
          </>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
