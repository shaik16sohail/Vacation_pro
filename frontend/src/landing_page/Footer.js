import React from 'react'

function Footer () {
  return (
    <div
      className='border-top footer'
      style={{ backgroundColor: '#fbfbfb' }}
    >
      <div className='container'>
        <div className='row mt-3'>
          <div className='col ms-4 fs-10'>
            <img src='media/images/logo.svg' style={{ width: '58%' }}></img>
            <br></br>
            <br></br>
            <p className='text-muted'>
              {' '}
              &copy; 2010 - 2024, Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className='col ms-4 fs-7 lh-3'>
            <p>Company</p>
            <a>About</a> <br></br>
            <a>Products</a> <br></br>
            <a>Pricing</a> <br></br>
            <a>Referral</a> <br></br>
            <a>Careers</a> <br></br>
            <a>Zerodha.tech</a> <br></br>
            <a>Press & media </a> <br></br>
            <a>Zerodha Cares(CSR) </a>
          </div>
          <div className='col ms-4 fs-7 lh-3' >
            <p>Support</p>
            <a>Contact us</a> <br></br>
            <a>Support portal</a>
            <br></br>
            <a>Z-Connect blog</a>
            <br></br>
            <a>List of charges</a> <br></br>
            <a>Downloads & resources</a>
            <br></br>
            <a>Videos</a>
            <br></br>
            <a>Market overview</a>
            <br></br>
            <a>How to file a complaint?</a>
            <br></br>
            <a>Status of your complaints</a>
            <br></br>
          </div>
          <div className='col ms-4 fs-7'>
            <p>Account</p>
            <a>Open an account</a>
            <a>Fund transfer</a>{' '}
          </div>
        </div>
        <div className='mt-5 text-muted small-font-size fs-10'>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
      <div className='footer-links fs-9 text-muted'>
        <a>NSE</a> <a>BSE</a> <a>MCX</a> <a>Terms & conditions</a>
        <a>Policies & procedures</a> <a>Privacy policy</a>{' '}
        <a>Disclosure For investor's attention</a> <a>Investor</a>{' '}
        <a>charter</a>
      </div>
    </div>
  )
}

export default Footer
