import React from 'react'

function Hero () {
  return (
    <>
      <div className='container'>
        
        <div
          className=' row p-5 text-center   mt-5  border-bottom'
        >
            <h1>Pricing</h1>
            <p className='text-muted mt-3'>Free equity investments and flat 20 tradya and F60 trades</p>
            </div>
            <div
          className=' row text-center  mt-5  '
        >
          <div className='col-4 '>
            <img src='media/images/pricingEquity.svg'></img>
            <p className='fs-4'>Free equity delivery</p>
            <p className='text-muted fs-8'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className='col-4 '>
            <img src='media/images/intradayTrades.svg'></img>
            <p className='fs-4'>Intraday and F&O trades</p>
            <p className='text-muted fs-8'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className='col-4 '>
            <img src='media/images/pricingEquity.svg'></img>
            <p className='fs-4'>Free direct MF</p>
            <p className='text-muted fs-8'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
