import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './SpecViewer.scss';


export default function SpecViewer(props) {


    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
        <Worker className='container__right' workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            {props.selectedSpecification ? (
            <div style={{
                height: '1000px',
                margin: 'auto'
                }} >
                <Viewer 
                    fileUrl={props.selectedSpecification.path}
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
