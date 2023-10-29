import { useState, useEffect } from "react";
import axios from "axios";
import search from '../../assets/Search icon.svg';
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { useParams } from "react-router-dom";
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from "../../components/Header/Header";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SpecViewer from "../../components/SpecViewer/SpecViewer";
import "./Specifications.scss";

function Specifications() {

const { projectId } = useParams();
const [projects, setProjects] = useState([]); 
const [selectedProject, setSelectedProject] = useState();
const [specifications, setSpecifications] = useState([]);
const [selectedSpecification, setSelectedSpecification] = useState();

// Fetch all projects
useEffect( () => {
  axios.get(`https://planbuild-api-2aa57d725286.herokuapp.com/projects`)
  .then(res => {
    setProjects(res.data);
    console.log(res.data);
  })
  .catch(err => {console.log('my error getting projects is', err)})
}, [])


// grab the projectId from the URL, fetch the current project and set selectedProject
useEffect(() => {
  axios.get(`https://planbuild-api-2aa57d725286.herokuapp.com/projects/${projectId}`)
  .then(res => {
    setSelectedProject(res.data);
    console.log('selected project is', res.data);
  })
  .catch(err => {console.log('error getting selected project', err)})
}, [projectId])


// Fetch all specifications for the selected project
useEffect( () => {
  axios.get(`https://planbuild-api-2aa57d725286.herokuapp.com/projects/${projectId}/specifications`)
  .then(res => {
    setSpecifications(res.data);
    console.log(res.data);
  })
  .catch(err => {console.log('error getting all specifications', err)})
}, [projectId])


// handle the click on the specification and return the selected specification
const handleSpecificationClick = (id) => {
  specifications.forEach(specification => {
      if (id === specification.id) {
          setSelectedSpecification(specification);
      }
  })
}

  return (
    <section className='spec'>
      <Header />
      <div className='spec__container' >
        
        <Sidebar />
        <div className="spec__master-container">

              <h2 className='spec__project-name'> {selectedProject?.name} {'>'} Specifications </h2>
              <h1 className='spec__title'> SPECIFICATIONS </h1>

              <div className="spec__buttons-container">
                <Link to={``} className="spec__button-link">
                  <button className="spec__button">Create</button>
                </Link>

                <div className="spec__search-container">
                  <input type="text" placeholder="Search Spec" className="spec__input" />
                  <img src={search} className="spec__icon" />
                </div>
              </div>
          
            <hr className="spec__hr"/>

            <div className='spec__header'>
              <div className='spec__header-label spec__header-label-number'>#</div>
              <div className='spec__header-label spec__header-label-title'>Title</div>
              <div className='spec__header-label'>Division</div>
              <div className='spec__header-label'>Revision</div>
              <div className='spec__header-label'>Date Issued</div>
            </div>

            <ul className='spec__projects'>
              {specifications.map(specification => (
                <li key={specification.id} onClick={() => handleSpecificationClick(specification.id)} className='spec__projects__list' >
                    <Scroll activeClass="active" className="spec__projects__list__link" to="PDFViewer" spy={true} smooth={true} offset={0} duration={500} delay={500} onClick={() => handleSpecificationClick(specification.id)}>
                      <div className="spec__projects-listing spec__projects-listing-number">{specification.number}</div>
                      <div className='spec__projects-listing spec__projects-listing-title'>{specification.title}</div>
                      <div className='spec__projects-listing'>{specification.division}</div>
                      <div className='spec__projects-listing'>{specification.revision}</div>
                      <div className='spec__projects-listing'>{specification.dateIssued}</div>
                    </Scroll>
                </li>
              ))}      
            </ul>
            
            <div className="spec__projects-nav-container">
              <div className="spec__projects-total">Showing 1 - {selectedProject?.specifications.length} of {selectedProject?.specifications.length} </div>
              <div className="spec__projects-navigation"><NavigateBeforeIcon /> 1 of 1 <NavigateNextIcon /></div>
            </div>

          </div>  
        </div>

          <div className="spec__projects__PDFViewer" id='PDFViewer'>
            <SpecViewer specifications={specifications} selectedSpecification={selectedSpecification} /> 
          </div>



    </section>
  ); 
}

export default Specifications;