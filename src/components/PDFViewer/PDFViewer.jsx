import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import axios from 'axios';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import fileUrl from '../../assets/butterfly.pdf';

export default function PDFViewer() {

    const [instructions, setInstructions] = useState(null)
    const [selectedInstruction, setSelectedInstruction] = useState(null);
    const { id } = useParams();


    // render the PDF stored in the backend
    useEffect( () => {
        if (selectedInstruction) {
            axios.get(`http://localhost:8080/projects/:id/instructions/${id}`)
            .then(res => {
                setSelectedInstruction(res.data)
                console.log(res.data)
            })
            .catch(err => console.error('Esse é o erro fetching o SI selecionado', err));
        }
    }, [id])


    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            {selectedInstruction ? (
            <div style={{
                height: '900px',
                margin: 'auto'
                }} >
                <Viewer 
                    fileUrl={fileUrl}
                    // fileUrl="public/1693199004662_butterfly.pdf"
                    defaultScale={SpecialZoomLevel.PageFit}
                    plugins={[defaultLayoutPluginInstance,]}
                /> 
            </div>
            
            ) : (
            <>No PDF found, Alex</>
            )}
        </Worker>

    </div>
  )
}
