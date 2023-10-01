'use client'
import { Context } from "@/utils/Context";
import { useContext, useEffect, useLayoutEffect, useRef } from "react";

export const useDraw = () =>{
    const {color, lineWidth, eraser, eraserColor, eraserWidth} = useContext(Context);
    const canvaRef = useRef<null | HTMLCanvasElement>(null);
    const mouseDown = useRef(false);

    useEffect(()=>{
      if(!canvaRef.current) return;
      const canvas = canvaRef.current;
      const ctx = canvas.getContext('2d');
      if(!ctx) return;
      ctx.strokeStyle = eraser? eraserColor : color;
      ctx.lineWidth = eraser? eraserWidth : lineWidth;
      console.log(eraserWidth)
    }, [lineWidth, color, eraser, eraserWidth])
    
    useLayoutEffect(()=>{
      if(!canvaRef.current) return;
      const canvas = canvaRef.current;
      const ctx = canvas.getContext('2d');
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;

      // console.log(canvas.height, canvas.width);

      function getCanvasCoordinates(event: MouseEvent) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        return { x, y };
      }

      function handleMouseDown(e: MouseEvent) {
        mouseDown.current = true;
      if (!ctx) return;

     
      ctx.beginPath();
      const { x, y } = getCanvasCoordinates(e);
      ctx.moveTo(x, y);

      }

      function handleMouseMove(e: MouseEvent) {
        if (!mouseDown.current || !ctx) return;
        const { x, y } = getCanvasCoordinates(e);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      function handleMouseUp(e: MouseEvent){
        mouseDown.current = false;
      }

      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseup', handleMouseUp);

      return ()=>{
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseup', handleMouseUp);
      }
    }, [])
  


    return canvaRef;

}