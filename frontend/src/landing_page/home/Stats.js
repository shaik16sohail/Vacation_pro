import React from 'react'


export default function Stats(){
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col p-3 me-3'>
                    <h4 className='fs-4 mb-4'>Trust with confidence</h4>
                    <h5 className='fs-5'>Customer-first always</h5>
                    <p className='text-muted' >That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments.</p>
                    <h5  className='fs-5'>No spam or gimmicks</h5>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h5 className='fs-5'>The Zerodha universe</h5>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h5 className='fs-5' >Do better with money</h5>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col p-3 '>
                    <img src='media/images/ecosystem.png' style={{width:"100%",height:"600px"}}></img>
                    <div className='text-center'>
                        <a href='#' className='me-3' style={{textDecoration:"none"}}>Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                        <a href='#' style={{textDecoration:"none"}}>Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
