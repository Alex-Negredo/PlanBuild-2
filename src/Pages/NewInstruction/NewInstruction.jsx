import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./NewInstruction.scss";

const NewInstruction = () => {

    const { projectId } = useParams();
    const [projects, setProjects] = useState([]); 
    const [selectedProject, setSelectedProject] = useState();
    const [instructions, setInstructions] = useState([]);
    const [selectedInstruction, setSelectedInstruction] = useState();

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


    const [number, setNumber] = useState('');
    const [title, setTitle] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [trade, setTrade] = useState('');
    const [dateIssued, setDateIssued] = useState('');
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();
    const formRef = useRef();

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    }
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    
    const handleCreatedByChange = (e) => {
        setCreatedBy(e.target.value);
    }
    
    const handleTradeChange = (e) => {
        setTrade(e.target.value);
    }
   
    const handleDateIssuedChange = (e) => {
        setDateIssued(e.target.value);
    }
    
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    }
    
    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    
    const upload = () => {
        const formData = new FormData()
        formData.append('file', instructions); // 'file' field for the PDF
        formData.append('number', number);
        formData.append('title', title);
        formData.append('createdBy', createdBy);
        formData.append('trade', trade);
        formData.append('dateIssued', dateIssued);
        formData.append('status', status);
        formData.append('type', type);

        axios.post(`https://planbuild-api-2aa57d725286.herokuapp.com/projects/${projectId}/instructions`, formData)
        .then(res => {
            setInstructions(res.data)
            navigate(`/projects/${projectId}/instructions`);
        }) 
        .catch(err => console.error('Esse é o erro:', err))
    }

    const backToSIList = () => {
        navigate(`/projects/${projectId}/instructions`);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        upload();
    };

    return (

        <div className="new-si">
        <Sidebar/>
        <div className="new-si__container">
            <h2 className='new-si__project-name'> {selectedProject?.name} {'>'} New Instruction </h2>
            <h1 className='new-si__title'>NEW INSTRUCTION</h1>

            <form ref={formRef} onSubmit={handleSubmit} className="new-si__form">
                <div className="new-si__inputs">
                    <label className="new-si__label">#</label>
                    <input type="text" value={number} onChange={handleNumberChange} className="new-si__input-fields"></input>
                    <label className="new-si__label">Title</label>
                    <input type="text" value={title} onChange={handleTitleChange} className="new-si__input-fields"></input>
                    <label className="new-si__label">Created by</label>
                    <input type="text" value={createdBy} onChange={handleCreatedByChange} className="new-si__input-fields"></input>
                    <label className="new-si__label">Trade</label>
                    <input type="text" value={trade} onChange={handleTradeChange} className="new-si__input-fields"></input>
                    <label className="new-si__label">Date Issued</label>
                    <input type="text" value={dateIssued} onChange={handleDateIssuedChange} className="new-si__input-fields"></input>
                    <label className="new-si__label">Status</label>
                    <input type="text" value={status} onChange={handleStatusChange} className="new-si__input-fields"></input>
                    <label className="new-si__label">Type</label>
                    <input type="text" value={type} onChange={handleTypeChange} className="new-si__input-fields"></input>
                </div>
                <div className="new-si__buttons">
                    <input type='file' accept='.pdf' onChange={(e) => setInstructions(e.target.files[0])} />
                    <div>
                        <button onClick={backToSIList}>Cancel</button>
                        <button type="button" onClick={upload}>Send for Review</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default NewInstruction;