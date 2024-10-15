import React from 'react'

function Team () {
  return (
    <>
      <div className='container '>
        <div className='row   fs-2 '>
          <p className=' text-center'>People</p>
        </div>
        <div
          className=' row text-muted   p-5  mb-5 '
          style={{ lineHeight: '1.8' }}
        >
          <div className='col  fs-8 ms-5 text-center '>
            <img  className='founder-img' src='media/images/nithinKamath.jpg' alt='Founder'></img>
            <br></br><br></br>
            <p className='fs-5'>Nithin Kamath<br></br> <span className='fs-8'>Founder ,CEO</span></p>
            
          </div>
          <div className='col  fs-8 '>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
            <br></br>
            <br></br>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).<br></br>
            <br></br>
            Playing basketball is his zen.<br></br>
            <br></br>
            Connect on <a href='#'>Homepage</a> / <a href='#'>TradingQnA</a> / <a href='#'>Twitter</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
