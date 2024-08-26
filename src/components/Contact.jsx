import React from 'react'

function Contact() {
  return (
    <>
    <div className='container-fluid p-5 mt-5'>
        <h1>Contact Us</h1>
        <textarea name="" id="" placeholder='Enter your message' className='form-control mt-3'></textarea>
        <input type="text" name="" id="" className="form-control mt-3 mb-3" placeholder='Enter your Email' />
        <button className='btn btn-info'>Send</button>
    </div>
    </>
  )
}

export default Contact