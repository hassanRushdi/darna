import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos'

const ContactHome = ({ t }) => {
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])
    return (
        <>
            <div className="app__content_home">
                <h3
                    data-aos="flip-right"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic"
                >{t('contact_footer1')}</h3>
                <p
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                >{t('contact_footer2')}</p>
                <Link to={'contact-us'}
                    data-aos="flip-right"
                    data-aos-duration="2000"
                    data-aos-easing="zoom-in-up"
                >
                    <button>{t('contact_footer3')}</button>
                </Link>
            </div>
        </>
    )
}

export default ContactHome
