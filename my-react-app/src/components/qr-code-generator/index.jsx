import { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code"
import ColorPicker from "../other/ColorPicker"
import { toPng } from 'html-to-image';

const COLOR_KEY = 'qr_color';

export default function QRCodeGenerator(){
    // 读取localStorage中的颜色
    const getInitialColor = () => {
        return localStorage.getItem(COLOR_KEY) || "#4ae3e8";
    };

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');
    const [color, setColor] = useState(getInitialColor());
    const qrRef = useRef(null);

    // 颜色变化时保存到localStorage
    useEffect(() => {
        localStorage.setItem(COLOR_KEY, color);
    }, [color]);

    function handleGenerateQrCode(){
        setQrCode(input);
        setInput("");
    }

    // 导出为PNG
    const handleExportPng = async () => {
        if (qrRef.current) {
            const dataUrl = await toPng(qrRef.current);
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'qr-code.png';
            link.click();
        }
    };

    // 复制到剪贴板
    const handleCopyToClipboard = async () => {
        if (qrRef.current) {
            const dataUrl = await toPng(qrRef.current);
            const res = await fetch(dataUrl);
            const blob = await res.blob();
            try {
                await navigator.clipboard.write([
                    new window.ClipboardItem({ 'image/png': blob })
                ]);
                alert('二维码已复制到剪贴板！');
            } catch (err) {
                alert('复制失败，可能浏览器不支持。');
            }
        }
    };

    return (
        <div>
            <div>
                <h1>QR Code Generator</h1>
                <input 
                    onChange={(e) => setInput(e.target.value)}
                    type="text" 
                    name="qr-code"
                    value={input}
                    placeholder="Enter your value"
                />
                
                <div>
                    <button onClick={handleGenerateQrCode}>Generate</button>
                    <ColorPicker color={color} onColorChange={setColor}/>
                </div>
            </div>

            <div style={{ margin: '20px 0' }}>
                <div ref={qrRef} style={{ display: 'inline-block', background: 'transparent', padding: 16 }}>
                    <QRCode
                        id="qr-code-value"
                        value={qrCode}
                        size={400}
                        fgColor={color}
                        bgColor="transparent"
                    />
                </div>
                <div style={{ marginTop: 16 }}>
                    <button onClick={handleCopyToClipboard}>复制二维码到剪贴板</button>
                    <button onClick={handleExportPng} style={{ marginLeft: 8 }}>导出为PNG</button>
                </div>
            </div>
        </div>
    );
}
