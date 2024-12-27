import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes, Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Layoutchinna from './componuents/A-LAYOUT/layoutchina';
import ChinnaHome from './componuents/B-HOME/homechina';
import Technology from './componuents/C-TYPES/Technology';
import Supplychain from './componuents/C-TYPES/SCM';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layoutchinna />}></Route>
          <Route index element={<ChinnaHome />} />
          <Route path='landing' element={<ChinnaHome />} />
          <Route path="techpage" element={<Technology />} />
          <Route path="scmpage" element={<Supplychain />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;