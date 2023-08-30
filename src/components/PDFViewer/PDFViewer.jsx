import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import axios from 'axios';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


export default function PDFViewer(props) {

    const [instructions, setInstructions] = useState(null)
    const [selectedInstruction, setSelectedInstruction] = useState(null);
    const { id } = useParams();


    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            {props.selectedInstruction ? (
            <div style={{
                height: '900px',
                margin: 'auto'
                }} >
                <Viewer 
                    fileUrl={props.selectedInstruction.path}
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
