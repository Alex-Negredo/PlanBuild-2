import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import PDFViewer from "../../components/InstructionViewer/PDFViewer";
import { useParams } from "react-router-dom";
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from "../../components/Header/Header";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import "./Instructions.scss";

function Instructions() {

const { projectId } = useParams();
const [projects, setProjects] = useState([]); 
const [selectedProject, setSelectedProject] = useState();
const [instructions, setInstructions] = useState([]);
const [selectedInstruction, setSelectedInstruction] = useState();

// Fetch all projects
useEffect( () => {
  axios.get(`http://localhost:8080/projects`)
  .then(res => {
    setProjects(res.data);
    console.log(res.data);
  })
  .catch(err => {console.log('my error getting projects is', err)})
}, [])


// grab the projectId from the URL, fetch the current project and set selectedProject
useEffect(() => {
  axios.get(`http://localhost:8080/projects/${projectId}`)
  .then(res => {
    setSelectedProject(res.data);
    console.log('selected project is', res.data);
  })
  .catch(err => {console.log('error getting selected project', err)})
}, [projectId])


// Fetch all instructions for the selected project
useEffect( () => {
  axios.get(`http://localhost:8080/projects/${projectId}/instructions`)
  .then(res => {
    setInstructions(res.data);
    console.log(res.data);
  })
  .catch(err => {console.log('error getting all instructions', err)})
}, [projectId])


// handle the click on the instruction and return the selected instruction
const handleInstructionClick = (id) => {
  instructions.forEach(instruction => {
      if (id === instruction.id) {
          setSelectedInstruction(instruction);
      }
  })
}

  return (
    <section className='si'>
      <Header />
      <div className='si__container' >
        
        <Sidebar />
        <div className="si__master-container">

              <h2 className='si__project-name'> {selectedProject?.name} {'>'} Instructions </h2>
              <h1 className='si__title'>SITE INSTRUCTIONS</h1>

              <Link to={`/projects/${projectId}/instructions/new`} className="si__button-link">
                <button className="si__button">Create</button>
              </Link>
          
            <hr className="si__hr"/>

            <div className='si__header'>
              <div className='si__header-label si__header-label-number'>#</div>
              <div className='si__header-label si__header-label-title'>Title</div>
              <div className='si__header-label'>Created By</div>
              <div className='si__header-label'>Trade</div>
              <div className='si__header-label'>Date Issued</div>
              <div className='si__header-label'>Status</div>
              <div className='si__header-label'>Type</div>
            </div>

            <ul className='si__projects'>
              {instructions.map(instruction => (
                <li key={instruction.id} onClick={() => handleInstructionClick(instruction.id)} className='si__projects__list' >
                    <Scroll activeClass="active" className="si__projects__list__link" to="PDFViewer" spy={true} smooth={true} offset={0} duration={500} delay={500} onClick={() => handleInstructionClick(instruction.id)}>
                      <div className="si__projects-listing si__projects-listing-number">{instruction.number}</div>
                      <div className='si__projects-listing si__projects-listing-title'>{instruction.title}</div>
                      <div className='si__projects-listing'>{instruction.createdBy}</div>
                      <div className='si__projects-listing'>{instruction.trade}</div>
                      <div className='si__projects-listing'>{instruction.dateIssued}</div>
                      <div className='si__projects-listing'>{instruction.status}</div>
                      <div className='si__projects-listing'>{instruction.type}</div>
                    </Scroll>
                </li>
              ))}      
            </ul>
            
            <div className="si__projects-nav-container">
              <div className="si__projects-total">Showing 1 - {selectedProject?.instructions.length} of {selectedProject?.instructions.length} </div>
              <div className="si__projects-navigation"><NavigateBeforeIcon /> 1 of 1 <NavigateNextIcon /></div>
            </div>

          </div>  
        </div>

          <div className="si__projects__PDFViewer" id='PDFViewer'>
            <PDFViewer instructions={instructions} selectedInstruction={selectedInstruction} /> 
          </div>



    </section>
  ); 
}

export default Instructions;