import { useState, useEffect } from 'react';
import axios from 'axios';

const PdfParser = () => {

  const [pdfData, setPdfData] = useState('');
  const [downloadButton, setDownloadButton] = useState(false);
  const [lines, setLines] = useState(['']);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [whichButton, setWhichButton] = useState('get');
  const [uploadButton, setUploadButton] = useState(false);

  useEffect(() => {
    let arrayed = lineBreaker();
    setLines(arrayed);
  }, [downloadButton]);

  const handlePoemButton = async (e) => {
    e.preventDefault();
    const result = await axios.get(
      'http://127.0.0.1:2737/api/v1/profiles/')
      .then((result) => {        
        setPdfData(result.data.text);
      })
      .catch((err) => {
        console.log('error :', err);
    })
    setDownloadButton(true);
  }

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log('selected file: ', selectedFile);
    setIsFilePicked(true);
    console.log('attempting to upload a poem...');
  }

  const lineBreaker = () => {
    return pdfData.split("\n");
  }

  const handleSubmission=async ()=>{
    const formData = new FormData();
    console.log('selected file: ', selectedFile)
    formData.append('File', selectedFile);
    console.log('form data:', formData);
    
    const result = await axios.post(
      'http://127.0.0.1:2737/api/v1/profiles/pdf/upload', selectedFile, { responseType: 'arraybuffer', headers: { Accept: 'application/pdf'}}
    )
    .then((res) => {
      console.log('Success: ', res);
    })
    .catch((error) => {
      console.error('Error: ', error);
    });

    console.log('result: ', result);
  };

  const changeUploadButton = () => {
    setUploadButton(true);
    setDownloadButton(false);
  }

  return(
    <div>
      <button className="button is-primary is-pulled-right" onClick={handlePoemButton}>Download a Poem</button>
      <button className="button is-pulled-right"onClick={changeUploadButton}>Upload a Poem</button>
      { downloadButton ? (
        <ul>
          { lines.map((value, index) =>{
            if (index === 2) { return <li key={index} className="poem_title"> <h1 className="title">{value}</h1></li>} else {
            return <li key={index} className="poem_line">{value}</li>}
          })}
        </ul>

      ) : (
        <form method="POST" action="/pdf/upload" enctype="multipart/form-data">
          <div>
          <input type="file" name="file" onChange={changeHandler}></input>
          </div>
          <button type="submit" name="file" onClick={handleSubmission}>Submit</button>  
          </form>
   
      )}
      { isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p> 
        
        
        </div>
        
      ) : (
           <p>Click a button to go~</p>
      )}
    </div>
  )
}

export default PdfParser;