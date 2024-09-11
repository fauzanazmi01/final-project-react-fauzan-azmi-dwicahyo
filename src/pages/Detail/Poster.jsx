import React from 'react'

export default function Poster({ link }) {
  return (
    <div>
        <img src={link} alt="" className='rounded' style={{ maxWidth: '100%', maxHeight: 'auto' }} />
    </div>
  )
}
