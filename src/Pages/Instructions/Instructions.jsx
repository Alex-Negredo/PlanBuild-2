import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import PDFViewer from "../../components/PDFViewer/PDFViewer";
import { useNavigate, useParams } from "react-router-dom";
import "./Instructions.scss";
// import Sidebar from '../../components/Sidebar/Sidebar';

function Instructions() {

const { projectId } = useParams();
const [projects, setProjects] = useState([]);
const [instructions, setInstructions] = useState([]);
const [selectedInstruction, setSelectedInstruction] = useState();

useEffect( () => {
  axios.get(`http://localhost:8080/projects`)
  .then(res => {
    setProjects(res.data);
    console.log(res.data);
  })
  .catch(err => {console.log('my error getting projects is', err)})
}, [])

useEffect( () => {
  axios.get(`http://localhost:8080/projects/${projectId}/instructions`)
  .then(res => {
    setInstructions(res.data);
    console.log(res.data);
  })
  .catch(err => {console.log('error getting all instructions', err)})
}, [])


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

      <div className='si__container' >
        
        {/* <Sidebar /> */}
        <div className="si__master-container">
        
              <h2 className='si__project-name'> props.project name </h2>
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

          </div>  
        </div>

          <div className="si__projects__PDFViewer" id='PDFViewer'>
            <PDFViewer instructions={instructions} selectedInstruction={selectedInstruction} /> 
          </div>



    </section>
  ); 
}

export default Instructions;