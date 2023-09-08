import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import PDFViewer from "../../components/PDFViewer/PDFViewer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Projects.scss";
import Header from "../../components/Header/Header";
import Instructions from "../Instructions/Instructions";

function Projects() {

const { id } = useParams();
const [projects, setProjects] = useState([]);
const [selectedProject, setSelectedProject] = useState();
const [instructions, setInstructions] = useState([]);


useEffect( () => {
  axios.get(`http://localhost:8080/projects`)
  .then(res => {
    setProjects(res.data);
    console.log(res.data);
  })
  .catch(err => {console.log('my error getting projects is', err)})
}, [])


// handle the click on the project and return the selectedProject
const handleProjectClick = (id) => {
  projects.forEach(project => {
      if (id === project.id) {
        setSelectedProject(project);
      }
  })
}

  return (
    <section className='projects'>

      <Header  />

      <div className='projects__container' >
        <Sidebar selectedProject={selectedProject} />
        <div className="projects__master-container">
              <h1 className='projects__title'>PROJECTS</h1>

              <Link to="" className="projects__button-link">
                <button className="projects__button">Create</button>
              </Link>
          
            <hr className="projects__hr"/>

            <div className='projects__header'>
              <div className='projects__header-label projects__header-label-number'>#</div>
              <div className='projects__header-label projects__header-label-title'>Name</div>
              <div className='projects__header-label'>City</div>
              <div className='projects__header-label'>Address</div>
              <div className='projects__header-label'>Status</div>
              <div className='projects__header-label'>Stage</div>
              <div className='projects__header-label'>Type</div>
            </div>

            <ul className='projects__projects'>
              {projects.map(project => (
                <li key={project.id} onClick={() => handleProjectClick(project.id)} className='projects__projects__list' >
                    <Link to={`/projects/${project.id}`} className="projects__projects-link">
                      <div className="projects__projects-listing projects__projects-listing-number">{project.id}</div>
                      <div className='projects__projects-listing projects__projects-listing-title'>{project.name}</div>
                      <div className='projects__projects-listing'>{project.city}</div>
                      <div className='projects__projects-listing'>{project.address}</div>
                      <div className='projects__projects-listing'>{project.status}</div>
                      <div className='projects__projects-listing'>{project.progress}</div>
                      <div className='projects__projects-listing'>{project.type}</div>
                    </Link>
                </li>
              ))}      
            </ul>

          </div>  
        </div>
    </section>
  ); 
}

export default Projects;