import React from "react"

import "./footer.css"

const Footer = () => {
  return (
    <>
     

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              {/* <img src='../images/logo-light.png' alt='' /> */}
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

         
        </div>
      </footer>
      <div className='legal'>
        <span>© 2021 RentUP. Designd By GorkCoder.</span>
      </div>
    </>
  )
}

export default Footer
