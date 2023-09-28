'use client'
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const useDraw = () =>{
    const canvaRef = useRef<null | HTMLCanvasElement>(null);
    const mouseDown = useRef(false);
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

      ctx.strokeStyle = 'red';
      ctx.lineWidth = 2;
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