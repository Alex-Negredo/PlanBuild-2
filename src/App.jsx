import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Instructions from './Pages/Instructions/Instructions';
import Sidebar from './components/Sidebar/Sidebar';
import PDFViewer from './components/PDFViewer/PDFViewer';
import NewInstruction from './Pages/NewInstruction/NewInstruction';
import Projects from './Pages/Projects/Projects';
import ProjectHome from './components/ProjectHome/ProjectHome';
import './App.scss';

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Sidebar />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectId' element={<ProjectHome />} />
        <Route path='/projects/:projectId/instructions' element={<Instructions />} />
        <Route path='/projects/:projectId/instructions/:instructionId' element={<PDFViewer />} />
        <Route path='/projects/:projectId/instructions/new' element={<NewInstruction />} />
        <Route path='/projects/:projectId/specifications' element={<Instructions />} />
        <Route path='/projects/:projectId/specifications/:specificationId' element={<PDFViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;