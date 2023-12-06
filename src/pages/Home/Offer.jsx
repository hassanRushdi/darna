import AOS from 'aos';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import img from '../../constants/Img';

const Offer = () => {
    let { t } = useTranslation()
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])
    return (
        <div className='app_offers mt-6'>
            <Container >
                <div className="img_overlay"  
                  data-aos="flip-down" data-aos-duration="1500" data-aos-easing="ease-out-cubic">
                    <img src={img.offer} className='w-100' alt="" />
           {/*          <div className="overlay">
                        <img src={img.offerLeft}   alt="image" srcset="" />
                    </div>  */}
                </div>
                <div className="offer_content mt-3" data-aos="flip-left"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic">
                    <h1 className='text-center bord mb-4'>{t('offer_title')}</h1>
                    {/* <p>{t('offer_body')}</p> */}
                </div>
            </Container>
        </div>
    )
}

export default Offer