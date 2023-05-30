import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import "./ReactPDF.scss";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function ReactPDF() {
  
  const [numPages, setNumPages] = useState(null); // will hold null because we can have n pages
  const [pageNumber, setPageNumber] = useState(1); // will hold 1 because it should always start with page 1
  const [scale, setScale] = useState(1); // 1 is the standard
  const [rotationAngle, setRotationAngle] = useState(0);

  // function to handle what happen when the page loads
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // function to handle zooming
  const nextPage = () => {
    setPageNumber(pageNumber + 1)
  }

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const zoomIn = () => {
    if (scale < 5)
    setScale(scale + 0.1)
  }

  const zoomOut = () => {
    if (scale > 0.4) {
     setScale(scale - 0.1)
    }  
  }

  const rotate = () => {
    setRotationAngle(rotationAngle + 90);
    console.log("pic should been rotated");
    console.log(rotationAngle);
  }

  const handleZoom = (e) => {
    e.preventDefault();
    if(e.deltaY < 0) {
      setScale(scale + 0.2); // zoom in
    } else if (scale > 0.4) {
      setScale(scale - 0.2); // zoom out
    }
  }

  return (
    <section className='pdf' >

      <div className='pdf__controls' >
        <div className='pdf__pages' > Page {pageNumber} of {numPages} </div>
        <div className='pdf__scale' > Scale {100*scale}% </div>
        <button className='pdf__page-back' onClick={prevPage} > ◀ Back </button>
        <button className='pdf__page-next' onClick={nextPage} > Next ▶ </button>
        <button className='pdf__zoom-out' onClick={zoomOut} > Zoom Out ➖ </button>
        <button className='pdf__zoom-in' onClick={zoomIn} > Zoom In ➕ </button>
        <button className='pdf__rotate-clockwise' onClick={rotate} > Rotate 🔄 </button>
      </div>

      <div className='pdf__view-container' onWheel={handleZoom} >
        <Document file="/butterfly.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} rotate={rotationAngle} />
        </Document>
      </div>

    </section>
  );
}

export default ReactPDF;