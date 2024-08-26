import React from 'react'

function Intro() {
  return (
    <>
        <div className='row container-fluid align-items-center' style={{height:'90vh'}}>
            <div className='col p-4'>
                <h1>Portfolio Webpage</h1>
                <p style={{fontSize:'20px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sequi cumque numquam nulla. Corporis, 
                   quae libero sunt doloremque molestiae itaque maxime porro, magnam quisquam, quod asperiores perferendis tenetur sapiente vero.</p>
                <a href="" className='btn btn-success'>Visit</a>
            </div>
            <div className='col'>
                <img src="https://img.freepik.com/free-vector/portfolio-update-concept-illustration_114360-136.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723939200&semt=ais_hybrid"
                     alt="" className='img-fluid' width={'500px'}/>
            </div>
        </div>
    </>
)
}

export default Intro