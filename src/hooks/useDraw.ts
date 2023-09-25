'use client'
import { useEffect, useRef, useState } from "react";

export const useDraw = () =>{
    const [mouseDown, setMouseDown] = useState(false);
    const [startPoint, setStartPoint] = useState<null | Point>(null);

    const canvaRef = useRef<null | HTMLCanvasElement>(null);


    // canvaRef?.current?.height = window.innerHeight;
    // canvaRef?.current?.width = window.innerWidth;

    let ctx = canvaRef?.current?.getContext('2d');
    if(!ctx) return;

    useEffect(()=>{
        if(!canvaRef.current) return;

        function strokeBegin(e:MouseEvent){
            setMouseDown(!mouseDown);
            let x = e.clientX;
            let y = e.clientY;
            setStartPoint({x, y});
            let ctx = canvaRef.current?.getContext('2d');
            if(!ctx) return;
            if(!startPoint?.x || !startPoint?.y) return;
            ctx.moveTo(startPoint.x, startPoint.y)
        }
        function drawLine(e:MouseEvent){
            if(!mouseDown) return;
            if(!ctx) return;
            console.log(e.clientX, e.clientY)
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'red'
            ctx.lineTo(e.clientX, e.clientY);
            ctx.stroke();
        }
        function mouseUp(e:MouseEvent){
            setMouseDown(!mouseDown);
            setStartPoint(null);
        }

        canvaRef.current.addEventListener('mousedown', strokeBegin);

        canvaRef.current.addEventListener('mousemove', drawLine);

        canvaRef.current.addEventListener('mouseup', mouseUp);

        return ()=>{
            canvaRef.current?.removeEventListener('mousedown', strokeBegin);
            canvaRef.current?.removeEventListener('mousemove', drawLine);
            canvaRef.current?.removeEventListener('mouseup', mouseUp);
        }

    }, []);

    return {canvaRef}

}