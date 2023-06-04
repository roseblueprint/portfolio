import React from 'react'
import './CTA'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import './header.css'
// import me from '../../assets/'


export const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                 <h4>Hello I'm</h4>
                 <h1>ROXANE PHILIPPINE</h1>
                 <h5 className='text-light'> A Software Engineer </h5>
                 <CTA />
                 <HeaderSocial />
                 <div className='my_image'>
                    {/* <img src={me} alt='me'/> */}
                 </div>
                 <a href='#contact' className='scroll__down'>Scroll down</a>

            </div>
        </header>
    )
}
export default Header;