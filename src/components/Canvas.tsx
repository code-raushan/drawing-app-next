'use client'
import React, {useEffect, useLayoutEffect, useRef} from 'react'
import { useDraw } from '@/hooks/useDraw'
type Props = {}

export default function Canvas({}: Props) {
  const canvaRef = useDraw();

  return (
    <canvas 
        ref={canvaRef}
    ></canvas>
  )
}