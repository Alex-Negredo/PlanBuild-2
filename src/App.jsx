import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Instructions from './Pages/Instructions/Instructions';
import PDFViewer from './components/PDFViewer/PDFViewer';
import PDFViewerTest from './components/PDFViewerTest/PDFViewerTest';
import NewInstruction from './Pages/NewInstruction/NewInstruction';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path='/projects/instructions' element={<Instructions />} />
        <Route path='/projects/instructions/1' element={<PDFViewerTest />} />
        <Route path='/projects/instructions/:instructionId' element={<PDFViewer />} />
        <Route path='/projects/instructions/new' element={<NewInstruction />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;