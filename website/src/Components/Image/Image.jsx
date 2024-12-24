import React from 'react'
import './Image.css'

const Image = ( {imgReference, imgAlt} ) => {
  return (
    <>
    <img src={imgReference} alt={imgAlt} className='profile-picture'></img>
    </>
  )
}

export default Image