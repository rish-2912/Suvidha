import React from 'react'
import Contact from '../contact/Contact'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
    return (
        <div className='footer' style={{ marginTop: '3rem', display: 'flex', width: '100%', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '47%' }}>
                <div className='footer__content'>
                    <div className='footer__info footer__mar'>
                        <p className='footer__head'>REACH US AT</p>
                        <p className='footer__address'>
                            Avinash Deodhar, 002,Laxmi vinayak chs,Gopal nagar lane no 3,Near Manjunath Highschool, patharli,Dombivli East.
                        </p>
                        <p className='footer__contact'>
                            <p>Dr Avinash Devdhar</p>
                            <p>09224264969</p>
                        </p>
                    </div>
                </div>
                <div>
                    <div className='footer__social flex-col'>
                        <ul className='flex'>
                            <li><a href='#'><FacebookIcon /></a></li>
                            <li><a href='#'><InstagramIcon /></a></li>
                            <li><a href='#'><TwitterIcon /></a></li>
                            <li><a href='#'><WhatsAppIcon /></a></li>
                        </ul>
                        <p>©2023 Suvidha.</p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Footer