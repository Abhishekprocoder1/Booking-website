import React from 'react'
import './Maillist.css'
const Maillist = () => {
    return (
        <div className='Mail'>
            <h1 className='mailTitle'>Save time , save money</h1>
            <span className='mailDEsh'>Sign up and we'll send the best deals to you</span>
            <div className='mailListInputContiner'>
                <input type='text' placeholder='Your Email' />
                <button>Subcribe</button>
            </div>

        </div>
    )
}

export default Maillist