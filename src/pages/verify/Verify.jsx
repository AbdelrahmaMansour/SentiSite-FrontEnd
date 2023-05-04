import React from 'react'
import emailimg from '../../assets/Email.svg'
import './verify.css'

const Verify = () => {
  return (
    <div className='gradient__bg'>
    <div className='verify'>
      <img src={emailimg} alt="emailImg" />
      <h1>Check your Email for verification</h1>
    </div>
    </div>
  )
}

export default Verify
