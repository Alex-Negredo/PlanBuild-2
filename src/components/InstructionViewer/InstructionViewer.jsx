import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './InstructionViewer.scss';


export default function InstructionViewer(props) {


    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
        <Worker className='container__right' workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            {props.selectedInstruction ? (
            <div style={{
                height: '1000px',
                margin: 'auto'
                }} >
                <Viewer 
                    fileUrl={props.selectedInstruction.path}
                    defaultScale={SpecialZoomLevel.PageFit}
                    plugins={[defaultLayoutPluginInstance,]}
                /> 
            </div>
            
            ) : (
            <></>
            )}
        </Worker>

    </div>
  )
}
