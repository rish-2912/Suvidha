import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' style={{ marginTop: '3rem' }}>
            <div className='footer__content'>
                <div className='footer__links w-32'>
                    <p>SHOP</p>
                    <ul>
                        <li><a href='#'>All Products</a></li>
                        <li><a href='#'>Skin Care</a></li>
                        <li><a href='#'>Hair Care</a></li>
                    </ul>
                </div>
                <div className='footer__links footer__mar'>
                    <p>CUSTOMER<br />CARE</p>
                    <ul>
                        <li><a href='#'>Contact Us</a></li>
                        <li><a href='#'>Delivery and<br></br>Returns</a></li>
                        <li><a href='#'>News & Media</a></li>
                    </ul>
                </div>
                <div className='footer__links footer__mar'>
                    <p>QUICK LINKS</p>
                    <ul>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Ingredients</a></li>

                    </ul>
                </div>
                <div className='footer__links footer__mar'>
                    <p>MY ACCOUNT</p>
                    <ul>
                        <li><a href='#'>My Profile</a></li>
                        <li><a href='#'>My Orders</a></li>
                        <li><a href='#'>Delivery and<br></br>Returns</a></li>
                    </ul>
                </div>
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
                        <li><a href='#'><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href='#'><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href='#'><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href='#'><i class="fa-brands fa-youtube"></i></a></li>
                    </ul>
                    <p>©2023 FundMe.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer