
import { func } from 'prop-types';
import React, {useState, useEffect, useRef} from 'react'

function MyComponent(){

    const [text, setText] = useState("");

    function handleClick(){
        setText("你点击了按钮");
    }

    return(
        <div>
            <button onClick={handleClick}>Button</button>
            <p>{text}</p>
            <p>xx</p>

        </div>
    );

}

export default MyComponent;