import React from 'react'


export default function Stats(){
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col p-2'>
                    <h3 className='fs-4 mb-5'>Trust with confidence</h3>
                    <h4 className='fs-5'>Customer-first always</h4>
                    <p className='text-muted' >That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h4  className='fs-5'>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h4 className='fs-5'>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4 className='fs-5' >Do better with money</h4>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col p-5'>
                    <img src='media/images/ecosystem.png' style={{width:"100%"}}></img>
                    <div className='text-center'>
                        <a href='#' className='me-3'>Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                        <a href='#'>Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
