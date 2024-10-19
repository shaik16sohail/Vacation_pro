import React from 'react'

function Hero () {
  return (
    <div
      style={{ backgroundColor: '#387ed1', color: '#fff' }}
      className='supportHero'
    >
      <div className='container '>
        <div className='  ' id='supportWrapper'>
          <h5>Support Portol</h5>
          <a href='#' style={{ color: '#fff', textDecoration: 'underline' }}>
            Track Tickets
          </a>
        </div>
        <div className='row '>
          <div className='col p-5 supportInput '>
            <p className='fs-6'>
              Search for an answer or browse help topics to create a ticket
            </p>
            <input placeholder='Eg: how do i activate F&O,why is my order getting rejected...' />
            <br /><br></br>
            <a href='#' class="underline">Track account opening</a> &nbsp; 
<a href='#' class="underline">Track segment</a>&nbsp;&nbsp;
<a href='#' class="underline">Intraday margins</a>&nbsp;&nbsp;
<a href='#' class="underline">User manual</a>

          </div>
          <div className='col p-5 ms-5'>
            <p className='fs-5'>Featured</p>
            <ol>
              <li>
                <a href='#'>Current Takeovers and Delisting - January</a>
              </li>
              <li>
                <a href='#'>Latest Intraday leverages -MIS & CO</a>{' '}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
