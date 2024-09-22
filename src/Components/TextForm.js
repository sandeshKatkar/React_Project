import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  let handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Converted to UpperrCase","success");
  };

  let handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("Converted to LowerCase","success");
  };

  let handleCopy=()=>{
    let text =document.getElementById("TextBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    // props.showAlert("Coppied to Clipboard","success");
    alert("Coppied to Clipboard");

  }

  let handleSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    // props.showAlert("Removed Extra spaces","success");
  }
  let handleClear=()=>{
    setText("");
    // props.showAlert("Text Cleared","success");
  }

  let Onchange = (event) => {
    //console.log("onchange");
    setText(event.target.value);
  };

  let [text, setText] = useState("");


  //style
  let SecondChild={
    border:"1px solid black",
    borderRadius:"10px",
    
  }

  let handleEmail=()=>{
    let newText=text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    alert(newText);
  }

  let handleLink=()=>{
    let newText=text.match(/https?:\/\/[^\s]+/);
    alert(newText);
  }
  // let [searchText,setSearchText]=useState("");
  // let searchWord=()=>{
    // let searchToWOrd=document.getElementById("SearchText").value;
    // let paragraph =document.getElementById("TextBox").value;
  //   alert(paragraph);

  //   searchToWOrd=searchToWOrd.replace(/[.**?^${}()|[\]\\]/g,"\\$&");

  //   let pattern=new RegExp(`${searchToWOrd}`,"gi");

  //   paragraph.innerHTML=paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`);
  //   //setText(paragraph);


  // }




  // const searchWord = () => {
    
  //   let matchingText=document.getElementById("SearchText").value;
  //   let text =document.getElementById("TextBox").value;
    
    
  //   const matchRegex = RegExp(matchingText, 'ig');
  
  //   // Matches array needed to maintain the correct letter casing
  //   const matches = [...text.matchAll(matchRegex)];
  
  //   setText( text
  //     .split(matchRegex)
  //     .map((nonBoldText, index, arr) => (
  //       <React.Fragment key={index}>
  //         {nonBoldText}
  //         {index + 1 !== arr.length && <mark>{matches[index]}</mark>}
  //       </React.Fragment>
  //   )).value);
  // };


  // let Onchange1 = (event) => {
  //   setSearchText(event.target.value);
  // };
  return (
    <>
      <div className="my-2">
        
          
            <h4 className={`text-${props.mode==='light'?'dark':'light'} `}>{props.heading}</h4>
        
        

{/* 
        <div  className="d-flex float-end" style={{marginTop:"-20px",marginBottom:"10px"}}>
              <input className="form-control me-2" id="SearchText" placeholder="Search Word" aria-label="Search"  onChange={Onchange1} 
              style={{width:"200px",height:"32px",backgroundColor:props.mode==='dark'?'rgb(10, 8, 95)':'white',color:props.mode==='light'?'rgb(10, 8, 95)':'white'}}/>
              <button className="btn btn-primary btn-sm text-ligth" type="submit" onClick={searchWord}>Search</button>
            </div> */}

        <div className="mb-3">
            <textarea
            className="form-control"
            style={{backgroundColor:props.mode==='dark'?'rgb(10, 8, 95)':'white',color:props.mode==='light'?'rgb(10, 8, 95)':'white'}}
            value={text}
            placeholder="Enter Text here"
            onChange={Onchange}
            id="TextBox"
            rows="8"
          ></textarea>
          {/* <div class="input-group mb-3 my-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search Word</button>
          </div> */}

        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleEmail}>Extract Email</button>
        <button className="btn btn-primary mx-2" onClick={handleLink}>Extract Link/Url</button>



      </div>

      <div className={`text-${props.mode==='light'?'dark':'light'} `} style={SecondChild }>
        <h4 className="mx-4" style={{borderBottom:"1px solid rgb(128, 128, 139)",padding:"10px"}}>Your Text Summery</h4> 
        <p className="mx-4 textSummery"><b>{text.split(" ").length-1} </b>words and <b>{text.length}</b> characters</p>
        <p className="mx-4"><b>{0.008 * text.split(" ").length}</b>  Minutes need to read</p>
        <div className="my-3 mx-3" style={{height:"200px",width:"97.5%",border:"0.5px solid #ced4da",borderRadius:"10px",overflowY:"auto"}}>
          <h3 className="my-2 mx-2">Preview</h3>
          <p className="py-2 px-2">{text}</p>
        </div>
      </div> 
    </>
  );
}
