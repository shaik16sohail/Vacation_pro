import React from 'react'


export default function Hero(){
    return (
        <div className='container p-5 mb-3'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero_Image' className='mb-5'></img>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks,derivates,mutual funds, and more</p>
                <button className='mt-4 p-1 btn btn-primary fs-5' style={{width:"23%",margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
    );
}