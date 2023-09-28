import Image from 'next/image'
import NavContainer from '@/components/NavContainer'
import Canvas from '@/components/Canvas'

export default function Home() {

  return (
    <main className='relative'>
      <NavContainer />
      <Canvas />
    </main>
  )
}
