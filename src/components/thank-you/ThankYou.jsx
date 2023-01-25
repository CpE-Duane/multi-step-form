import React from 'react'
import './thankyou.css'
import tyLogo from '../../assets/images/icon-thank-you.svg'

const ThankYou = () => {
    return (
        <div className='thank-you'>
            <img src={tyLogo} alt="" />
            <h1>Thank you!</h1>
            <p className='instructions'>
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
            </p>
        </div>
    )
}

export default ThankYou