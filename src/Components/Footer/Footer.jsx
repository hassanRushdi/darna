
import AOS from 'aos'
import { motion } from 'framer-motion'
import React, { useContext, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import Component from '../../constants/Component'
import Icons from '../../constants/Icons'
import img from '../../constants/Img'
import { FetchDataContext } from '../../context/FetchData'
import { LocalizationContext } from '../../context/LangChange'
import './footer.scss'

export const Footer = () => {
    let { t } = useTranslation()
    let { loading } = useContext(LocalizationContext)

    let { data, setProductsId } = useContext(FetchDataContext)
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])
    let navigation = useNavigate()
    const handleChange = (id) => {
        setProductsId(id)
        navigation('/products')
    };
    return (
        <>
            {!loading && (<>
                <Component.ContactHome t={t} />
                <div className="footer-top">

                    <div className='app__Footer'>
                        <div className="overlayer"></div>
                        <Container className='position-relative'>
                            <Row className='flex justify-content-center align-items-center'>
                                <Col data-aos="fade-left"
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos-duration="1500"
                                    data-aos-easing="ease-out-cubic" xl={3} lg={3} md={6} sm={12} className=' content1      mt-3 app_icons_footer_sm'   >
                                    <div className='bg- ' >
                                        <img src={img.LogoLight} style={{ width: '148px', height: '142px' }} alt="logo right click" />
                                        <br />
                                        <div className="social flex flex-row justify-content-center align-items-center  gap-3">

                                            <div className="social_media flex gap-2">
                                                <motion.a
                                                    href={'https://www.facebook.com/darnarealstate/'}
                                                    target='_blank' rel="noreferrer"
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ duration: 0.3 }}
                                                    className='m-0 p-0'
                                                >
                                                    <div style={{ width: '25px', height: '25px' }}>
                                                        <img src={img.facebook} className='w-100 object-fit-contain' alt="" srcset="" />
                                                    </div>
                                                </motion.a>
                                                {/*                 <motion.a
                                                    href={'https://www.twitter.com/'}
                                                    target='_blank' rel="noreferrer"
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div style={{ width: '25px', height: '25px' }}>
                                                        <img src={img.twitter} className='w-100 object-fit-contain' alt="" srcset="" />
                                                    </div>
                                                </motion.a> */}

                                                <motion.a
                                                    href={'https://www.linkedin.com/'}
                                                    target='_blank' rel="noreferrer"
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div style={{ width: '25px', height: '25px' }}>
                                                        <img src={img.linkedin} className='w-100 object-fit-contain' alt="" srcset="" />
                                                    </div>
                                                </motion.a>
                                                <motion.a
                                                    href={'https://www.youtube.com/'}
                                                    target='_blank' rel="noreferrer"
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div style={{ width: '25px', height: '25px' }}>
                                                        <img src={img.youtube} className='w-100 object-fit-contain' alt="" srcset="" />
                                                    </div>
                                                </motion.a>

                                                <motion.a
                                                    href="https://wa.me/+201111353089"
                                                    target='_blank' rel="noreferrer"
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div style={{ width: '25px', height: '25px' }}>
                                                        <img src={img.whatsapp} className='w-100 object-fit-contain' alt="" srcset="" />
                                                    </div>
                                                </motion.a>
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                                <Col xl={2} lg={2} md={6} sm={12} className='  content2 mt-3' >
                                    <div data-aos="fade-right"
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-out-cubic" >
                                        <div className="footer-ui">
                                            <ul>
                                                <Link to={'/'}> <li>{t("nav_home")}</li></Link>
                                                <Link to={'/project-available'}> <li>{t("nav_project")}</li></Link>
                                                <Link to={'/media'}> <li>{t("nav_media")}</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={2} lg={2} md={6} sm={12} className='  content3 mt-3' >
                                    <div data-aos="fade-up"
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-out-cubic">

                                        <div className="footer-ui">
                                            <ul>
                                                <Link to={'/product'}> <li>{t("nav_product")}</li></Link>
                                                <Link to={'/about-us'}> <li>{t("nav_about")}</li></Link>
                                                <Link to={'/contact-us'}> <li>{t("nav_contact")}</li></Link>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} lg={3} md={6} sm={12} className=' content4 mt-' >
                                    <div data-aos="fade-up"
                                        data-aos-duration="1500"
                                        data-aos-anchor-placement="top-bottom"
                                        data-aos-easing="ease-out-cubic">
                                        <div className="app__footer-contact-us">
                                            <a className='content-Contact-Us'
                                                href="https://www.google.com/maps/place/30%C2%B000'41.5%22N+31%C2%B024'45.7%22E/@30.0115242,31.4101105,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0115242!4d31.4126854?entry=ttu"
                                                target="_blank" rel="noreferrer">
                                                <motion.div
                                                    className="phoneIcons round d-flex justify-content-center align-items-center "
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Icons.location />
                                                </motion.div>
                                                <p className="m-0 p-0">
                                                    {t('contact_address')}
                                                </p>
                                            </a>
                                            <a href={`tel:+201111353089`} target='_blank' rel="noreferrer" className='m-0 p-0 mt-3 content-Contact-Us'>
                                                <motion.div
                                                    className="phoneIcons round d-flex justify-content-center align-items-center "
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Icons.CallOutlite />
                                                </motion.div>
                                                {/* <span dir='ltr'>{' + '}{settings?.phone?.replace(/\D/g, '')?.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, '$1-$2-$3-$4')}</span> */}
                                                <span dir='ltr'>+201111353089</span>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={3} lg={3} md={6} sm={12} className=' content1     mt-3 app_icons_footer_lg'   >
                                    <div data-aos="fade-left"
                                        data-aos-duration="1500"
                                        data-aos-anchor-placement="top-bottom"
                                        data-aos-easing="ease-out-cubic">
                                        <img src={img.LogoLight} style={{ width: '148px', height: '142px' }} alt="logo right click" />
                                        <br />
                                        <div className="social flex flex-row justify-content-center align-items-center  gap-3">

                                            <div className="social_media flex gap-2">
                                                <motion.a
                                                    href={'https://www.facebook.com/darnarealstate'}
                                                    target='_blank' rel="noreferrer"
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ duration: 0.3 }}
                                                    className='m-0 p-0'
                                                >
                                                    <div style={{ width: '25px', height: '25px' }}>
                                                        <img src={img.facebook} className='w-100 object-fit-contain' alt="" srcset="" />
                                                    </div>
                                                </motion.a>
                                                {/*<motion.a
                                                    href={'https://www.twitter.com/'}
                                                    target='_blank' rel="noreferrer"
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div style={{ width: '25px', height: '25px' }}>
                                                        <img src={img.twitter} className='w-100 object-fit-contain' alt="" srcset="" />
                                                    </div>
                                                </motion.a> */}

                                                <motion.a
                                                    href={'https://www.linkedin.com/'}
                                                    target='_blank' rel="noreferrer"
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div style={{ width: '25px', height: '25px' }}>
                                                        <img src={img.linkedin} className='w-100 object-fit-contain' alt="" srcset="" />
                                                    </div>
                                                </motion.a>
                                                <motion.a
                                                    href={'https://www.youtube.com/'}
                                                    target='_blank' rel="noreferrer"
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div style={{ width: '25px', height: '25px' }}>
                                                        <img src={img.youtube} className='w-100 object-fit-contain' alt="" srcset="" />
                                                    </div>
                                                </motion.a>

                                                <motion.a
                                                    href="https://wa.me/+201111353089"
                                                    target='_blank' rel="noreferrer"
                                                    whileHover={{ scale: 1.5 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div style={{ width: '25px', height: '25px' }}>
                                                        <img src={img.whatsapp} className='w-100 object-fit-contain' alt="" srcset="" />
                                                    </div>
                                                </motion.a>
                                            </div>

                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <div className="line_gold">
                            <Icons.GoldLine />
                        </div>

                        <div className="footer__copyright" dir='ltr' data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-anchor-placement="top-bottom"
                            data-aos-easing="ease-out-cubic">
                            <p>
                                <a href="https://vigtas.com/" target='_blank' className='text-light'>&copy; 2023 Vigtas</a>
                            </p>
                        </div>

                    </div>


                    <div className="top  " onClick={() => window.scroll(0, 0)} >
                        <Icons.ArrowTop />
                    </div>
                </div>
            </>
            )}
        </>
    )
}
