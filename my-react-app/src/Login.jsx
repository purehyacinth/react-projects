import { func } from "prop-types";
import { useState } from "react";

function Login(){

    const [buttonText, setButtonText] = useState("登陆中");

    function handleButtonClick(){

        if(buttonText === "登陆中"){
            setButtonText("已登出");
        }else{
            setButtonText("登陆中");
        }

    }


    return (
    <div>
        <button onClick={handleButtonClick}>{buttonText}</button>
    </div>)
}

export default Login;