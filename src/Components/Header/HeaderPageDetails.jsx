import React from 'react'
import img from './../../constants/Img';
import './header.scss'

const HeaderPageDetails = ({ image, title} ) => {
    return (
        <div>
            <div className='app__header'>
                <div className='main_page'>
 
                    <img src={image} alt="" className='w-100 h-100' />
                    <div className="content">
                        <h1>{title}</h1> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderPageDetails