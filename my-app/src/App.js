import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Layoutchinna from './componuents/A-LAYOUT/layoutchina';
import ChinnaHome from './componuents/B-HOME/homechina';


function App() {
  return (
    <>


      <HashRouter>
        <Routes>
          <Route path="/" element={<Layoutchinna />}>
            <Route index element={<ChinnaHome />} />
          </Route>
        </Routes>
      </HashRouter>

   
      
    </>
  );
}

export default App;