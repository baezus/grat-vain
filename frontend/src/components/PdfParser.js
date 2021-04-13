import { useState, useEffect } from 'react';
import axios from 'axios';

const PdfParser = () => {

  const [pdfData, setPdfData] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    console.log('pdf data: ', pdfData);

  }, [buttonPressed]);

  const handlePoemButton = async (e) => {
    e.preventDefault();
    const result = await axios.get(
      'http://127.0.0.1:2737/api/v1/profiles/')
      .then((result) => {        
        console.log('result text: ', result.data.text);
        setPdfData(result.data.text);
      })
      .catch((err) => {
        console.log('error :', err);
    })
    setButtonPressed(!buttonPressed);
  }

  return(
    <>
      <button onClick={handlePoemButton}>Get Poem</button>
        <p>
          { pdfData }
        </p>
    </>
  )
}

export default PdfParser;