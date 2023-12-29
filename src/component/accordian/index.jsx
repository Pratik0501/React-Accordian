//Single Selection and Multi Selection Accordian

import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordian() {
  const [selcted, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId){
        // console.log(getCurrentId);
        setSelected(getCurrentId === selcted ? null : getCurrentId);
  }

  return <div className="wrapper">
    
    <div className="accordian">
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div className="item">
            <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {
                selcted === dataItem.id ? 
                <div className="content">{dataItem.answer}</div>
                : null
            }
          </div>
        ))
      ) : (
        <h1>No data Found</h1>
      )}
    </div>
  </div>;
}
