import { useState, useEffect } from 'react';
import axios from 'axios';

const PdfParser = () => {

  const [pdfData, setPdfData] = useState('');
  const [buttonPressed, setButtonPressed] = useState(false);
  const [lines, setLines] = useState(['']);
  const finalities = [];

  useEffect(() => {
    console.log('pdf data: ', pdfData);
    let arrayed = lineBreaker();
    console.log('arrayed: ', arrayed);
    setLines(arrayed);
    
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

  const lineBreaker = () => {
    return pdfData.split("\n");
  }

  return(
    <>
      <button onClick={handlePoemButton}>Get Poem</button>
        <ul>
          { lines.map((value, index) =>{
            return <li key={index}>{value}</li>
          })}
        </ul>
    </>
  )
}

export default PdfParser;