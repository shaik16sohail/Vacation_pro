import React from 'react'

function Hero () {
  return (
    <>
      <div className='container mt-5'>
        <div className='row me-5 fs-2 mt-5  mb-5 p-4'>
          <p className='ms-5 text-center'>
            We pioneered the discount broking model in India.<br></br>
            Now, we are breaking ground with our technology.
          </p>
        </div>
        <div className=' row text-muted   mt-5  border-top' style={{lineHeight:"1.8"}}>
          <div className='col  fs-8 mt-5 p-5'>
            <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.<br></br> <br></br>Today, our disruptive pricing models and in-house
            technology have made us the biggest stock broker in India.<br></br><br></br> Over 1+
            Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.</p>
          </div>
          <div className='col mt-5 fs-8 p-5'><p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.<br></br><br></br>
            <a href='#'>Rainmatter </a>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.<br></br><br></br> And yet, we are always up to something new every day. Catch
            up on the latest updates on our blog or see what the media is saying
            about us.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
