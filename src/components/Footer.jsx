import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className="row container-fluid p-5 bg-primary">
        <div className="col-4">
            <h2>Portfolio</h2>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam tenetur earum rerum autem eligendi quam soluta fuga id hic dolores 
               incidunt, odit voluptatum sit aperiam quas deleniti fugiat alias eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perspiciatis inventore ad incidunt aut. Itaque deleniti suscipit laudantium quae iusto, nisi ab ducimus molestiae omnis laboriosam 
               dignissimos tempore eveniet dolorum veniam.</p>
        </div>
        <div className="col-4">
            <h2>Important Links</h2>
            <a href="">Link1</a>
            <a href="">Link2</a>
            <a href="">Link3</a>
        </div>
        <div className="col-4">
            <h2>Feedback</h2>
            <textarea name="" id="" className='form-control mb-3'></textarea>
            <button className="btn btn-success">Submit</button>
        </div>
        <h4 className='mt-3'>Portfolio 2024 &copy; all rights reserved</h4>
    </div>
    
    </>
  )
}

export default Footer