
import Instructions from './Pages/Instructions/Instructions';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawingViewer from './components/DrawingViewer/DrawingViewer';
import './App.scss';
import Header from './components/Header/Header';
import NewInstruction from './Pages/NewInstruction/NewInstruction';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
      <BrowserRouter className="App">

        <Header />
        
        <Routes>
          {/* <Route path='/' element={<DrawingViewer />} /> */}
        
          <Route path='/projects'  /> {/* project list */}
          <Route path='/:projects/details' /> {/* projectName/homepage */}
          <Route path='/:projects/drawings' /> {/* projectName/drawingsPageList */}
          <Route path='/:projects/drawings/:id' /> {/* projectName/drawingsPageList/pageNumber */}
          <Route path='/:projects/instructions' element={<Instructions />} /> {/* projectName/siteInstructionList */}
          <Route path='/:projects/instructions/:instructionId' element={<DrawingViewer />} /> {/* projectName/site-instruction/pageNumber */}
          <Route path='/:projects/instructions/new' element={<NewInstruction />} /> {/* projectName/site-instruction/pageNumber */}
        </Routes>
        
      </BrowserRouter>
  );
}

export default App;