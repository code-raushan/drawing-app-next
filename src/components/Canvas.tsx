'use client'
import React, {useRef} from 'react'
import { useDraw } from '@/hooks/useDraw'
type Props = {}

export default function Canvas({}: Props) {
    const ref = useDraw();
    if(!ref?.canvaRef) return;
  

  return (
    <canvas 
        ref={ref.canvaRef}
    />
  )
}