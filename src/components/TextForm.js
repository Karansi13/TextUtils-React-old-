import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText) 
        props.showAlert("Converted to uppercase","success");
    }
    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText) 
        props.showAlert("Converted to lowercase","success");
    }
    const handleClearClick = ()=>{
        
        let newText = '';
        setText(newText) 
        props.showAlert("Text cleared","success");
    }
    const handleCopy = ()=>{
        var text =document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value) 
        props.showAlert("Copy to clipboard","success");
    }
    const handleSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")) 
        props.showAlert("Removed extra spaces","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    

    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state
    // setText("new text"); //Correct way to change the text
  return (
    <>
    <div className='container' style = {{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 mb-2="true" disabled={text.length===0} >{props.Heading}</h1>
      <div className="mb-3">
        <textarea className="text form-control" value={text} 
        onChange={handleOnChange} style={{backgroundColor : props.mode ==='dark'?'#13466e':'white',color: props.mode === 'dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
      <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleClearClick}>Clear text</button>
      <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style = {{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      {/* <p>{text.split(" ").length-1} words and {text.length} characters</p> */}
      
      <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
