import React from 'react'

function RightSection ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
}) {
  return (
    <div className='container mt-5 p-5  '>
      <div className='row'>
        <div className='col-6  mt-5 p-5 '>
          <p className='fs-2'>{productName}</p>
          <p className='fs-7 text-muted'>{productDescription}</p>
          <div>
            <a href={tryDemo}>{tryDemo} <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
        {/* <div className='col-1'></div> */}
        <div className='col-6 '>
          <img src={imageUrl}></img>
        </div>
      </div>
    </div>
  )
}

export default RightSection
