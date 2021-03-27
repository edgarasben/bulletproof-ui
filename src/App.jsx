import React, { useState } from 'react'
import Button from './Button'
import { Horse, Heart, Cube, Bug } from 'phosphor-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-7xl mx-auto mt-24 flex'>
      <Button
        className='mr-2 button-secondary'
        buttonType='primary'
        iconLeft={<Bug size={20} weight='duotone' />}
      >
        Bugs
      </Button>
      <Button
        className='mr-2 button-primary'
        buttonType='secondary'
        iconLeft={<Heart size={20} weight='duotone' />}
      >
        Like
      </Button>
      <input className='border-gray-400 rounded-sm' type='text' />
      <input className='disabled:opacity-25 border' />
      <button className='md:dark:disabled:focus:hover:bg-gray-400'>
        asdasdas
      </button>
    </div>
  )
}

export default App
