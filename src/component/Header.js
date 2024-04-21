import React, {useState} from "react";
import "./Header.css";

import Button from "../small_component/Button";

const Header = () =>{
    const [data, setData] = useState("This is true");
    const clickEvent = () =>{
        setData(pre => pre === "This is true" ? "This is false": "This is true");
    }
    const buttonAttribute = {
        content: data,
        onClick: clickEvent
    }
    
    return (
        <div className="header">
          <div>The React project</div>
          <div>more test</div>
          <Button {...buttonAttribute} />
        </div>
    )
}

export default Header;