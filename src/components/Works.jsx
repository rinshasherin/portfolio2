import React from 'react'

function Works() {
  return (
    <>
        <h1 className='text-center mt-3 mb-3'>Our Works</h1>

        <div className='d-flex flex-wrap justify-content-around'>
            <div className='card' style={{width:'18rem'}}>
                <img src="https://img.freepik.com/free-vector/flat-design-colored-portfolio-template_23-2149215470.jpg" 
                     className='card-img-top' alt="" height={'200px'} />
                <div className='card-body'>
                    <h5 className='card-title'>Work1</h5>
                </div>
            </div>
            <div className='card' style={{width:'18rem'}}>
                <img src="https://img.freepik.com/free-vector/gradient-interview-portfolio-template_23-2149220443.jpg" 
                     className='card-img-top' alt="" height={'200px'}/>
                <div className='card-body'>
                    <h5 className='card-title'>Work2</h5>
                </div>
            </div>
            <div className='card' style={{width:'18rem'}}>
                <img src="https://t3.ftcdn.net/jpg/04/56/81/74/360_F_456817431_j0OUQsO0Vnv6tVqkag8Ia7CjiUkRRSct.jpg" 
                     className='card-img-top' alt="" height={'200px'}/>
                <div className='card-body'>
                    <h5 className='card-title'>Work3</h5>
                </div>
            </div>
            <div className='card' style={{width:'18rem'}}>
                <img src="https://media.licdn.com/dms/image/D4D12AQFEBHScacXAHw/article-cover_image-shrink_720_1280/0/1696405029412?e=2147483647&v=beta&t=jGm963bmHE2cWFVJAPaU5ycleC0Tb_ByjrYfEsExW1I"
                     className='card-img-top' alt="" height={'200px'}/>
                <div className='card-body'>
                    <h5 className='card-title'>Work4</h5>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Works