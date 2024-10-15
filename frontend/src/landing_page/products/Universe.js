import React from 'react'


function Universe() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <p className='fs-2 text-center text-muted'>The Zerodha Universe</p>
                <p className='text-center fs-8 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row'>
                <div className='col p-5'><img src='media/images/smallcaseLogo.png'></img><p className='fs-9'>Thematic investment platform</p></div>
                <div className='col p-5'><img style={{width:"75%"}} src='media/images/streakLogo.png'></img><p className='fs-9'>Thematic investment platform</p></div>
                <div className=' mt-3 col p-5'><img style={{width:"75%"}} src='media/images/sensibullLogo.svg'></img><p className='fs-9'>Thematic investment platform</p></div>
            </div>
            <div className='row' >
                <div className='col p-5'><img style={{width:"75%"}} src='media/images/zerodhaFundhouse.png'></img><p className='fs-9'>Thematic investment platform</p></div>
                <div className='col p-5'><img style={{width:"75%"}} src='media/images/goldenpiLogo.png'></img><p className='fs-9'>Thematic investment platform</p></div>
                <div className='col p-5'><img style={{width:"75%"}} src='media/images/dittoLogo.png'></img><p className='fs-9'>Thematic investment platform</p></div>
            </div>
        </div>
      );
}

export default Universe;