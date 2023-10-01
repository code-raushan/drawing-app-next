'use client'
import React, {createContext, useState} from "react";
import { Context } from "@/utils/Context";

export const ContextProvider = ({children}: {children: React.ReactNode})=>{
    const [color, setColor] = useState("#ff0000");
    const [lineWidth, setLineWidth] = useState(3);
    const [eraser, setEraser] = useState(false);
    const [eraserColor, setEraserColor] = useState('#020817');
    const [eraserWidth, setEraserWidth] = useState(3);
    return (
        <Context.Provider value={{color, setColor, lineWidth, setLineWidth, eraser, setEraser, eraserColor, setEraserColor, eraserWidth, setEraserWidth}}>
            {children}
        </Context.Provider>
    )
}