import React from 'react'


function LeftSection({imageUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container mt-5  '>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src={imageUrl}></img>
                </div>
                <div className='col-1'></div>
                <div className='col-5 p-5 mt-5'>
                    <p className='fs-2'>{productName}</p>
                    <p className='fs-7 text-muted'>{productDescription}</p>
                    <div>
                    <a href={tryDemo} className='fs-7'>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} className='fs-7' style={{marginLeft:"50px"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay} className='me-3 '><img src='media/images/googlePlayBadge.svg'></img></a>
                    <a href={appStore}><img src='media/images/appstoreBadge.svg'></img></a>
                    </div>
                   
                    
                </div>
            </div>
        </div>
     );
}

export default LeftSection;