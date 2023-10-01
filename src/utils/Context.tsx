'use client';

import { createContext } from "react";

type ContextValue = {
    color: string;
    setColor: React.Dispatch<React.SetStateAction<string>>;
    lineWidth: number;
    setLineWidth: React.Dispatch<React.SetStateAction<number>>;
    eraser: boolean;
    setEraser: React.Dispatch<React.SetStateAction<boolean>>;
    eraserColor: string;
    setEraserColor: React.Dispatch<React.SetStateAction<string>>;
    eraserWidth: number;
    setEraserWidth: React.Dispatch<React.SetStateAction<number>>;
};

let defaultValues = {
    color: 'ff0000',
    setColor: ()=>{},
    lineWidth: 3,
    setLineWidth: ()=>{},
    eraser: false,
    setEraser: ()=>{},
    eraserColor: '#020817',
    setEraserColor: ()=>{},
    eraserWidth: 3,
    setEraserWidth: ()=>{},
}
export const Context = createContext<ContextValue>(defaultValues);