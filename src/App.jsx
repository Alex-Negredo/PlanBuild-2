import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Instructions from './Pages/Instructions/Instructions';
import PDFViewer from './components/PDFViewer/PDFViewer';
import NewInstruction from './Pages/NewInstruction/NewInstruction';
import SideBar from './components/SideBar/SideBar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path='/projects/instructions' element={<Instructions />} />
        <Route path='/projects/Sidebar' element={<SideBar />} />
        {/* <Route path='/projects/instructions/1' element={<PDFViewerTest />} /> */}
        <Route path='/projects/instructions/:id' element={<PDFViewer />} />
        <Route path='/projects/instructions/new' element={<NewInstruction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;