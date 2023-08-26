import { useState } from "react";
import "./NewInstruction.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewInstruction = () => {

    const[instructions, setInstructions] = useState();
    const navigate = useNavigate();
    
    const upload = () => {
        const formData = new FormData()
        formData.append('file', instructions)
        axios.post('http://localhost:8080/instructions', formData)        
        .then(res => {
            
            // Define your input values
            const number = "1801";
            const title = "Mechanical Revisions";
            const createdBy = "Architect 01";
            const trade = "Mech Trade";
            const dateIssued = "08/02/23";
            navigate(`/:projects/instructions?number=${number}&title=${title}&createdBy=${createdBy}&trade=${trade}&dateIssued=${dateIssued}`);
        }) 
        .catch(err => console.error('Esse é o erro:', err))
    }

    const backToSIList = () => {
        navigate('/:projects/instructions');
    }

    return (

        <div>

            <h2 className='new-si__project-name'> props.project name </h2>
            <h1 className='new-si__title'>New Site Instruction</h1>

            <form className="new-si__form">
                <div className="new-si__inputs">
                    <label className="new-si__label">#</label>
                    <input type="text"></input>
                    <label className="new-si__label">Title</label>
                    <input type="text"></input>
                    <label className="new-si__label">Created by</label>
                    <input type="text"></input>
                    <label className="new-si__label">Trade</label>
                    <input type="text"></input>
                    <label className="new-si__label">Date Issued</label>
                    <input type="text"></input>
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