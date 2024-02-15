import React from 'react'
import { Link } from 'react-router-dom'
import './chat.css'
import whatsapplink from '../Assests/svg/whatsapp.svg'
function WhatsApp() {
  return (
    <div>
        <Link to="https://wa.me/+919501868775" target='_blank' className="whats-app"><span className='sr-only'>What's app</span>
        <img src={whatsapplink} alt="" /></Link>
    </div>
  )
}

export default WhatsApp