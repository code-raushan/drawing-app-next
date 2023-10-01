'use client'
import React from "react";
import {HexColorPicker} from 'react-colorful';

export const ColorPicker =({color, onChange, presetColors}: {color: string, onChange: (arg: string)=>void, presetColors: string[] })=>{
    return(
        <div className="picker">
            <HexColorPicker color={color} onChange={onChange}/>
            <div className="picker__swatches">
                {presetColors.map((presetColor)=>(
                    <button 
                        key={presetColor}               
                        className="picker__swatch"
                        style={{background: presetColor}}
                        onClick={()=>onChange(presetColor)}
                    />
                ))}
            </div>
        </div>
    )
}