import React from 'react'


export default function Education(){
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col'>
                    <img src='media/images/education.svg' style={{width:"90%"}}></img>
                </div>
                <div className='col'>
                <h3 className='mb-3'>Free and open market education</h3>
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='#'  style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='#' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}