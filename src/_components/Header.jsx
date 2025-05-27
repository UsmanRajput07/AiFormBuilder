import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between p-4'>
      <Image src="/logoipsum-332.svg" alt="Vercel Logo" width={100} height={24} />
      <Button>Get Started</Button>
    </div>
  )
}
