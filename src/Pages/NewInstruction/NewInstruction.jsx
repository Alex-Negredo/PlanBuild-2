import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "../../components/SideBar/SideBar";
import "./NewInstruction.scss";

const NewInstruction = () => {

    const [instructions, setInstructions] = useState(null);
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

        axios.post('http://localhost:8080/projects/instructions', formData)
        .then(res => {
            setInstructions(res.data)
            navigate('/projects/instructions');
        }) 
        .catch(err => console.error('Esse é o erro:', err))
    }

    const backToSIList = () => {
        navigate('/projects/instructions');
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        upload();
    };

    return (

        <div className="new-si">
        <SideBar/>
        <div className="new-si__container">
            <h2 className='new-si__project-name'> props.project name </h2>
            <h1 className='new-si__title'>NEW SITE INSTRUCTION</h1>

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