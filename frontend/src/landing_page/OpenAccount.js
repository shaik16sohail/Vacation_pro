import React from 'react'
import { Link } from 'react-router-dom';
function OpenAccount() {
    return ( 
        <div className='container p-5 mb-3'>
            <div className='row text-center'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p className='mt-2'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='mt-4 p-1 btn btn-primary fs-5' style={{width:"23%",margin:"0 auto"}}><Link  style={{color:"white"}} to='/signup'>Signup Now</Link></button>
            </div>
        </div>
     );
}

export default OpenAccount;