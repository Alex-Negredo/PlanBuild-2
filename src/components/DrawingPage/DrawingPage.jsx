import Header from '../Header/Header'
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { useParams } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import PDFViewer from "../PDFViewer/PDFViewer";
import DrawingViewer from '../DrawingViewer/DrawingViewer';
import './DrawingPage.scss';

function DrawingPage() {

const { projectId } = useParams();
const [projects, setProjects] = useState([]); 
const [selectedProject, setSelectedProject] = useState();

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

  return (
    <div>

      <Header />
      
      <div className='drawing'>
        <Sidebar />
        <DrawingViewer selectedProject={selectedProject} />
      </div>

    </div>
  )
}

export default DrawingPage