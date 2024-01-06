import React, { useState } from 'react';
import './App.css';

function Body() {
  const [input, setInput] = useState('');
  // const [input2, setInput2] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  // const handleInput2Change = (event) => {
  //   setInput2(event.target.value);
  // };
  const handleDownload = () => {
    const saveText = document.createElement('a');
    let textToSave = new Blob ([document.querySelector('input').value ],{
        type: "text/word"
    });

    saveText.href = URL.createObjectURL(textToSave);
    saveText.download = `myFile.txt`;
    document.body.appendChild(saveText);
    saveText.click();
    }

  return (
    <>
    <div className="container d-flex justify-content-center mt-5">
            <div className="col-lg-8">
              <textarea  onChange={handleInputChange} />
            </div>

            <div className="col-lg-4">
              <input type="text" className="text-center py-4" value={input} />
            </div>
    </div>

    <div className="d-flex justify-content-center align-content-center">
            <button type="submit" className='btn btn-secondary' onClick={handleDownload}>Download</button>
        </div>
    </>
  );
}

export default Body;