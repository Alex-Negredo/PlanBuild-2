import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Instructions from './Pages/Instructions/Instructions';
import PDFViewer from './components/InstructionViewer/InstructionViewer';
import NewInstruction from './Pages/NewInstruction/NewInstruction';
import Projects from './Pages/Projects/Projects';
import ProjectHome from './components/ProjectHome/ProjectHome';
import Home from './Pages/Home/Home';
import DrawingPage from './components/DrawingPage/DrawingPage';
import Specifications from './Pages/Specifications/Specifications';
import './App.scss';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectId' element={<ProjectHome />} />
        <Route path='/projects/:projectId' element={<ProjectHome />} />
        <Route path='/projects/:projectId/drawings' element={<DrawingPage />} />
        <Route path='/projects/:projectId/instructions' element={<Instructions />} />
        <Route path='/projects/:projectId/instructions/:instructionId' element={<PDFViewer />} />
        <Route path='/projects/:projectId/instructions/new' element={<NewInstruction />} />
        <Route path='/projects/:projectId/specifications' element={<Specifications />} />
        <Route path='/projects/:projectId/specifications/:specificationId' element={<PDFViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;