'use client'
import React, {useContext, useEffect, useLayoutEffect, useRef} from 'react'
import { useDraw } from '@/hooks/useDraw'
import { Context } from '@/utils/Context';
type Props = {}

export default function Canvas({}: Props) {
  const canvaRef = useDraw();
  const {eraser}=useContext(Context)
  return (
    <canvas 
        ref={canvaRef}
        style={{cursor: eraser? "grabbing": "crosshair" }}
    ></canvas>
  )
}