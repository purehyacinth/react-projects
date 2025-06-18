import React from 'react';

function ColorPicker({ color, onColorChange }){
    return(
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{background: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a color: </label>
            <input type="color" value={color} onChange={(e) => onColorChange(e.target.value)}/>
        </div>
    );
}

export default ColorPicker