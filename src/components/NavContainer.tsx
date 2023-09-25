'use client'

import {useState} from 'react';
import Navbar from '@/components/Navbar'
import { ModeToggle } from '@/components/Mode-Toggle'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

import React from 'react'

type Props = {}

function NavContainer({ }: Props) {
    const [menu, setMenu]=useState(true)
    return (
        <section className='flex justify-between mt-3 mx-4'>
            <Button variant={'outline'} className='mt-2' onClick={()=>setMenu(!menu)}>
              {!menu ? <Menu />:  <X />} 
            </Button>
            {menu && <Navbar />}
            <ModeToggle />
        </section>
    )
}
export default NavContainer