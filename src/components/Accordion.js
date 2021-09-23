import React,{ useState , useRef } from 'react';

import '../App.css';

function Accordion(props) {

  let info= props.content;

  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion_icon");
 
  const content = useRef(null);

  function toggleAccordion(){
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
    setRotateState(setActive === "active" ? "accordion_icon" : "accordion_icon rotate");
  }
  return (
    <div className="accordion_section">
        <button className={`accordion_button ${setActive}`} onClick={toggleAccordion} >
          <h5>{props.title}</h5>
          <h4 className={`${setRotate}`}>+</h4>
        </button>
        
        <div ref = {content} style={{maxHeight: `${setHeight}`}} className="accordion_text" > {info && info.map((info, index1) => <li key={index1}>{info}</li> )} </div>
      </div>
  )
}

export default Accordion

// dangerouslySetInnerHTML={{__html: props.content}}