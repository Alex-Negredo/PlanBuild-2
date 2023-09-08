import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import './DrawingViewer.scss';


export default function DrawingViewer(props) {


    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div>
        <Worker className='container__right' workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            {props.selectedProject ? (
            <div style={{
                height: '1000px',
                margin: 'auto'
                }} >
                <Viewer 
                    fileUrl={props.selectedProject.drawings}
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
