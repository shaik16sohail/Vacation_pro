import React from 'react'
export default function Awards(){
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col p-2'>
                    <img src='media/images/largestBroker.svg'></img>
                </div>
                <div className='col p-2'>
                    <h2>Largest stock broker in India</h2>
                    <p className='mb-3'>
                        2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in;
                    </p>
                    <div className='row'>
                        <div className='col'>
                            <ul>
                                <li><p>Future and Options</p></li>
                                <li><p>Commodity derivates</p></li>
                                <li><p>Currency derivates</p></li>
                            </ul>
                        </div>
                        <div className='col'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt securities</p></li>
                             </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}></img>
                </div>
            </div>
        </div>
    );
}