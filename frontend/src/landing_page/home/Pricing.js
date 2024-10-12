import React from 'react'


export default function Pricing(){
    return (
        <div className='container mb-5'>
            <div className='row mt-5'>
                <div className='col-4'>
                    <h3 className='mb-3'>Unbeatable pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col p-3 border'>
                            <h2 className='mb-3'>₹0</h2>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col p-3 border '>
                            <h2 className='mb-3'>₹20</h2>
                            <p>Intraday and F&0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}