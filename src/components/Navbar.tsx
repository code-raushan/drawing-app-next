'use client'
import { useState, useEffect } from 'react'

import { FaPencilAlt, FaEraser, FaUndoAlt, FaRedoAlt } from 'react-icons/fa'
import { AiOutlineDownload, AiOutlineUpload } from 'react-icons/ai'
import { FaRegNoteSticky } from 'react-icons/fa6'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
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
import { ModeToggle } from './Mode-Toggle'


type Props = {}

function Navbar({ }: Props) {
    return (
        <nav className='px-4 py-4 w-[70%] md:w-[50%] flex flex-row justify-evenly border-b dark:border-slate-800 border-slate-200'>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline"><FaPencilAlt /></Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <Slider defaultValue={[3]} max={10} step={1} />
                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline"><FaEraser /></Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <Slider defaultValue={[3]} max={10} step={1} />
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

