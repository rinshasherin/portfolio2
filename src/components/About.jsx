import React from 'react'

function About() {
  return (
    <>
    <div className='p-5 mt-5 container-fluid row'>
        <div className='col-8'>
            <h1>About Us</h1>
            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa provident nostrum itaque aspernatur
               deleniti sapiente dicta sequi ex porro, repellendus nam sed excepturi commodi fuga! Lorem ipsum dolor sit amet consectetur nesciunt, 
               adipisicing elit. Unde veniam, mollitia ratione eum maiores dicta ipsum. Culpa facere rerum fuga, modi debitis aliquam nihil beatae,
               quasi commodi in nostrum maiores Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nemo natus explicabo fuga doloribus,
               unde maiores cum laudantium placeat nesciunt dolore ullam cumque quo fugiat dignissimos odit debitis magnam nulla!.</p>
               
        </div>
        <div className='col-4'>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/OqyURAoQ4NQ?si=r2hvpbfKk6FxETc9" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
    
    </>
  )
}

export default About