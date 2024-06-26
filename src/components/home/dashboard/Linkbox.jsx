import React from 'react'

const Linkbox = ({ memoNumber, messageType, messageValue }) => {
  return (
    <div className='link-box flex flex-col items-center justify-center'>
        <h3 className='font-bold text-4xl'>{memoNumber}</h3>
        <h3 className='font-semibold'>{messageType}</h3>
        {/* <p>{messageValue}</p> */}
    </div>
  )
}

export default Linkbox
