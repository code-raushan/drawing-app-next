'use client'
import {useContext } from 'react'

import { FaPencilAlt, FaEraser, FaUndoAlt, FaRedoAlt } from 'react-icons/fa'
import { AiOutlineDownload, AiOutlineUpload } from 'react-icons/ai'
import { FaRegNoteSticky } from 'react-icons/fa6'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Context } from '@/utils/Context'
import { ColorPicker } from './ColorPicker'


type Props = {}

function Navbar({ }: Props) {
    const presetColors = ["#cd9323", "#1a53d8", "#9a2151", "#0d6416", "#8d2808"];
    const {color, setColor, lineWidth, setLineWidth, eraser, setEraser, eraserWidth, setEraserWidth} = useContext(Context);
    return (
        <nav className='px-4 py-4 w-[70%] md:w-[50%] flex flex-row justify-evenly border-b dark:border-slate-800 border-slate-200'>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" onClick={()=>setEraser(false)}><FaPencilAlt /></Button>
                </PopoverTrigger>
                <PopoverContent className="w-90 flex flex-col justify-center">
                    <Slider defaultValue={[3]} max={10} value={[lineWidth]} step={1} onValueChange={(value)=>setLineWidth(value[0])}/>
                    <ColorPicker 
                        color={color}
                        onChange={setColor}
                        presetColors={presetColors}
                    />
                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" onClick={()=>setEraser(true)}><FaEraser /></Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <Slider defaultValue={[3]} value={[eraserWidth]} max={20} step={1} onValueChange={(value)=>setEraserWidth(value[0])} />
                </PopoverContent>
            </Popover>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" className='text-lg'><AiOutlineDownload /></Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Download</p>

                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" className='text-lg'><AiOutlineUpload /></Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Upload</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline"><FaRegNoteSticky /></Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Sticky Notes</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline" ><FaUndoAlt /></Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Undo</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline"><FaRedoAlt /></Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Redo</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </nav>
    )
}

export default Navbar

