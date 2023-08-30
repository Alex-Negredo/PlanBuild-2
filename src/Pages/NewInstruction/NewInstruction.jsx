import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./NewInstruction.scss";
import axios from "axios";

const NewInstruction = () => {

    const [instructions, setInstructions] = useState(null);
    const [number, setNumber] = useState('');
    const [title, setTitle] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [trade, setTrade] = useState('');
    const [dateIssued, setDateIssued] = useState('');
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

    
    const upload = () => {
        const formData = new FormData()
        formData.append('file', instructions); // 'file' field for the PDF
        formData.append('number', number);
        formData.append('title', title);
        formData.append('createdBy', createdBy);
        formData.append('trade', trade);
        formData.append('dateIssued', dateIssued);

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

        <div>

            <h2 className='new-si__project-name'> props.project name </h2>
            <h1 className='new-si__title'>New Site Instruction</h1>

            <form ref={formRef} onSubmit={handleSubmit} className="new-si__form">
                <div className="new-si__inputs">
                    <label className="new-si__label">#</label>
                    <input type="text" value={number} onChange={handleNumberChange}></input>
                    <label className="new-si__label">Title</label>
                    <input type="text" value={title} onChange={handleTitleChange}></input>
                    <label className="new-si__label">Created by</label>
                    <input type="text" value={createdBy} onChange={handleCreatedByChange}></input>
                    <label className="new-si__label">Trade</label>
                    <input type="text" value={trade} onChange={handleTradeChange}></input>
                    <label className="new-si__label">Date Issued</label>
                    <input type="text" value={dateIssued} onChange={handleDateIssuedChange}></input>
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
    )
}

export default NewInstruction;