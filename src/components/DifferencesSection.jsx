import Button from "./Button/Button.jsx";
import { useState } from "react";
import { differences } from "../data";


export default function DifferencesSection(){

    const [contentType, setContentType] = useState(null);

    // let content = "Put on the link";
  
    // console.log("App Component Render");
  
    function handleClick(type) {
      setContentType(type);
      // console.log(content);
      // content = type;
    }

    return(
        <section>
          <h3>What is our difference</h3>
          <Button
            isActive={contentType == "way"}
            onClick={() => handleClick("way")}
          >
            Way
          </Button>
          <Button
            isActive={contentType == "easy"}
            onClick={() => handleClick("easy")}
          >
            Availability
          </Button>
          <Button
            isActive={contentType == "program"}
            onClick={() => handleClick("program")}
          >
            Concentrate
          </Button>
          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <p>Put on the button</p>
          )} */}

          {!contentType && <p>Put on the button</p>}
          {contentType && <p>{differences[contentType]}</p>}
        </section>
    )
}