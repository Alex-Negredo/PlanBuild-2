import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import PDFViewer from "../../components/PDFViewer/PDFViewer";
import "./Instructions.scss";
import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";

function Instructions() {

const [instructions, setInstructions] = useState([]);
const [selectedInstruction, setSelectedInstruction] = useState();


useEffect( () => {
  axios.get(`http://localhost:8080/projects/instructions`)
  .then(res => {
    setInstructions(res.data);
    console.log(res.data);
  })
  .catch(err => {console.log('my error is', err)})
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
        
        <SideBar />
        <div className="si__master-container">
        

            {/* <div className="si__list-viewer-container"> */}
        
              <h2 className='si__project-name'> props.project name </h2>
              <h1 className='si__title'>SITE INSTRUCTIONS</h1>

              <Link to="/projects/instructions/new" className="si__button-link">
                <button className="si__button">Create</button>
              </Link>
            {/* </div>  */}
          
            <hr className="si__hr"/>

            <div className='si__header'>
              <div className='si__header-label si__header-label-number'>#</div>
              <div className='si__header-label si__header-label-title'>Title</div>
              <div className='si__header-label'>Created By</div>
              <div className='si__header-label'>Trade</div>
              <div className='si__header-label'>Date Issued</div>
              <div className='si__header-label'>Status</div>
              <div className='si__header-label'>Type</div>
              <div className='si__header-label si__header-label-costImpact'>Cost Impact</div>
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
                      <div className='si__projects-listing si__projects-listing-costImpact'>{instruction.costImpact}</div>
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