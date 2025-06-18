import { useState } from "react";
import QRCode from "react-qr-code"
import ColorPicker from "../other/ColorPicker"

export default function QRCodeGenerator(){

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    const [color, setColor] = useState("#4ae3e8"); // Initialize with the default color

    function handleGenerateQrCode(){
        setQrCode(input);
        setInput("");
    }

    return (
        <div>
            <div>
                <h1>QR Code Generator</h1>
                <input onChange={(e) => setInput(e.target.value)}
                type="text" name="qr-code"
                value={input}
                placeholder="Enter your value"/>
                
                <div>
                    <button onClick={handleGenerateQrCode}>Generate</button>
                    <ColorPicker color={color} onColorChange={setColor}/>
                </div>
            </div>

            <div>
                <QRCode
                id="qr-code-value"
                value={qrCode}
                size={400}
                fgColor={color}
                />
            </div>
        </div>
        
    );
}
