
import React, { useState } from 'react';
import "./CV_DownloaderStyles.css";
import Swal from 'sweetalert2';

const PDF_FILE_URL = "http://localhost:3000/myCV.pdf";

const CV_Dowloader = () => {

  const [loading, setLoading] = useState(false);

  const downloadFileAtURL = async(url) => {

    try {
      setLoading(true);
      await fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
      Swal.fire('Success!', 'CV Downloaded', 'success'); 
      setLoading(false);
    } catch (error) {

      console.log("Failed to download:", error);
      Swal.fire('Error!', 'Something went wrong', 'error'); 
      setLoading(false);
    }
    

  }

  return (
    <div className="downloader-container">
      <button className="btn-downloader" onClick={() => { downloadFileAtURL(PDF_FILE_URL) }} disabled={loading}> {loading ? 'Downloading...' : 'Download CV'}</button>
    </div>
  );
}

export default CV_Dowloader;