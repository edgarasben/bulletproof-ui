import React from 'react'

function Button(props) {
  const types = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary:
      'bg-blue-700 text-blue-600 hover:bg-blue-700 bg-opacity-20 hover:bg-opacity-30',
  }
  const whichType = types[props.buttonType]

  console.log(whichType)

  return (
    <button
      className={`flex flex-row font-semibold py-2 px-4 rounded-md text-base items-center transition antialiased transform-gpu active:scale-97 ${whichType} ${props.className}`}
    >
      <i className='w-5 h-5 mr-2'>{props.iconLeft}</i>
      {props.children}
    </button>
  )
}

export default Button
