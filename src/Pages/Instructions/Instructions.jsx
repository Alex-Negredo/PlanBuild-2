import { useState, useEffect } from "react";
import axios from "axios";
import PDFViewer from "../../components/PDFViewer/PDFViewer";
import "./Instructions.scss";
import { Link } from "react-router-dom";

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


  return (
    <section className='si'>

      <div className='si__container' >
        <h2 className='si__project-name'> props.project name </h2>
        <h1 className='si__title'>SITE INSTRUCTIONS</h1>

        <div>
          <Link to="/projects/instructions/new" className="si__button-link">
            <button className="si__button">Create</button>
          </Link>
        </div> 
        
        <hr className="si__hr"/>

        <div className='si__header'>
          <div className='si__header-label'>SI #</div>
          <div className='si__header-label'>Title</div>
          <div className='si__header-label'>Trade</div>
          <div className='si__header-label'>Date Issued</div>
          <div className='si__header-label'>PDF</div>
        </div>

        <ul className='si__projects'>

          {instructions.map(instruction => (
            
            <li key={instruction.id} className='si__projects__list' >
              <Link to={`/projects/instructions/${instruction.id}`}  className='si__projects__container'>
                <div className="si__projects-listing">{instruction.number}</div>
                <div className='si__projects-listing'>{instruction.title}</div>
                <div className='si__projects-listing'>{instruction.trade}</div>
                <div className='si__projects-listing'>{instruction.dateIssued}</div>
                <div className='si__projects-listing'>{instruction.path}</div>
              </Link>
            </li>
          ))}      

        </ul>

      </div>

    </section>
  ); 
}

export default Instructions;