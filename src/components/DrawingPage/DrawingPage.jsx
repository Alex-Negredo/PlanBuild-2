import Header from '../Header/Header'
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DrawingViewer from '../DrawingViewer/DrawingViewer';
import './DrawingPage.scss';

function DrawingPage() {

const { projectId } = useParams();
const [projects, setProjects] = useState([]); 
const [selectedProject, setSelectedProject] = useState();

// Fetch all projects
useEffect( () => {
  axios.get(`https://planbuild-api-2aa57d725286.herokuapp.com/projects`)
  .then(res => {
    setProjects(res.data);
    console.log(res.data);
  })
  .catch(err => {console.log('my error getting projects is', err)})
}, [projects])


// grab the projectId from the URL, fetch the current project and set selectedProject
useEffect(() => {
  axios.get(`https://planbuild-api-2aa57d725286.herokuapp.com/projects/${projectId}`)
  .then(res => {
    setSelectedProject(res.data);
    console.log('selected project is', res.data);
  })
  .catch(err => {console.log('error getting selected project', err)})
}, [projectId])

  return (
    <div>

      <Header />
      
        <div>
          <DrawingViewer selectedProject={selectedProject} />
        </div>

    </div>
  )
}

export default DrawingPage