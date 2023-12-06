import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Component from '../../constants/Component'
import img from '../../constants/Img'
import { LocalizationContext } from '../../context/LangChange'
import { ProductService } from './ProductService'
import './product.scss'
import AOS from 'aos'

const ProductPage = () => {
    let { isLang } = useContext(LocalizationContext);
    let { t } = useTranslation()
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);
    const [data5, setData5] = useState([]);
    const [data6, setData6] = useState([]);
    const [data7, setData7] = useState([]);
    useEffect(() => {
        window.scroll(0, 0)
        ProductService.getProducts().then((data) => setData(data));
        ProductService.getProducts2().then((data) => setData2(data));
        ProductService.getProducts3().then((data) => setData3(data));
        ProductService.getProducts4().then((data) => setData4(data));
        ProductService.getProducts5().then((data) => setData5(data));
        ProductService.getProducts6().then((data) => setData6(data));
        ProductService.getProducts7().then((data) => setData7(data));
    }, []);
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])
    return (
        <div className='app__products_page overflow-hidden'>
            <Component.HeaderPage image={img?.OurProducts} title={t('nav_product')} />
            <div className="app_products">
                <Container  >
                    <div className="app_header" data-aos="flip-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">
                        <h3>{t('about_darna')}  </h3>
                        <p>{t('about_us_body1')}  </p>
                     </div>
                    <Row className='my-5'>
                        {
                            data?.map((item, index) => (
                                <Col key={index} xl={6} lg={6} md={6} sm={12}
                                    data-aos={`${index % 2 == 0 ? t('fade_right') : t('fade_left')}`}
                                    data-aos-duration="1000"
                                    data-aos-delay={`${index * 100}`}
                                    data-aos-easing="linear">
                                    <div className="item   ">
                                        {item.icon}
                                        <p>{isLang === "en" ? item.nameEn : item.nameAr}</p>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>


                </Container>
            </div>
            <Container>
                <section className='app__product_section2  '>
                    <div className="app_header">
                        <h3 data-aos="flip-left"
                            data-aos-duration="2000"
                            data-aos-easing="ease-out-cubic">{t('about_darna2')}  <span className='seconed_color'>{t('app_title')}</span></h3>
                    </div>
                    <Row className='product_none'>
                        {
                            data2?.map((item, index) => (
                                <Col key={index} xl={6} lg={6} md={12} sm={12}
                                    data-aos={`${index % 2 == 0 ? t('fade_right') : t('fade_left')}`}
                                    data-aos-duration="1000"
                                    data-aos-delay={`${index * 100}`}
                                    data-aos-easing="linear"
                                >
                                    <div className={`item_sec_2 ${index == 0 || index == 3 || index == 4 ? 'item_section_color' : 'item_section_color_sm'}  flex flex-column  justify-content-center align-items-center mt-6  `}>
                                        {item.icon}
                                        <h3>{isLang === "en" ? item.titleEn : item.titleAr}</h3>
                                        <p className='text-center'>{isLang === "en" ? item.bodyEn : item.bodyAr}</p>
                                    </div>
                                </Col>
                            ))
                        }

                    </Row>
                </section>

                <section className='app__product_section2 '>
                    <div className="app_header">
                        <h3 data-aos="flip-left"
                            data-aos-duration="2000"
                            data-aos-easing="ease-out-cubic">{t('about_darna3')}  <span className='seconed_color'>{t('app_title')}</span></h3>
                    </div>
                    <Row className='app__product_section3'>

                        <Col xl={4} lg={4} md={6} sm={12}>
                            <Row className='app__product_section3'>
                                {
                                    data3?.map((item, index) => (
                                        <Col xl={12} lg={12} md={12} sm={12}
                                            data-aos="flip-left"
                                            data-aos-duration="2000"
                                            data-aos-easing="ease-out-cubic"
                                        >
                                            <div className={`  item_sec_3 py-2 px-4 ${index == 0 && 'item_section_color'} flex flex-row   gap-3 align-items-center mt-6  `}>
                                                <img src={item.image} alt="" srcset="" />
                                                <span className={`   ${index == 0 ? 'h3' : 'span'} `}> {isLang === "en" ? item?.titleEn : item.titleAr}   </span>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>

                        <Col xl={4} lg={4} md={6} sm={12}>
                            <Row className='app__product_section3'>
                                {
                                    data4?.map((item, index) => (
                                        <Col xl={12} lg={12} md={12} sm={12}
                                            data-aos="flip-left"
                                            data-aos-duration="2000"
                                            data-aos-easing="ease-out-cubic"
                                        >
                                            <div className={`item_sec_3 py-2 px-4 ${index == 0 && 'item_section_color_dark'} flex flex-row   gap-3 align-items-center mt-6  `}>
                                                <img src={item.image} alt="image" />
                                                <span className={`   ${index == 0 ? 'h3' : 'span'} `}> {isLang === "en" ? item?.titleEn : item.titleAr}   </span>
                                            </div>
                                        </Col>
                                    ))
                                }

                            </Row>
                        </Col>

                        <Col xl={4} lg={4} md={6} sm={12}>
                            <Row className='app__product_section3'>
                                {
                                    data5?.map((item, index) => (
                                        <Col xl={12} lg={12} md={12} sm={12}
                                            data-aos="flip-left"
                                            data-aos-duration="2000"
                                            data-aos-easing="ease-out-cubic"
                                        >
                                            <div className={`item_sec_3 py-2 px-4 ${index == 0 && 'item_section_color'} flex flex-row   gap-3 align-items-center mt-6  `}>
                                                <img src={item.image} alt="" srcset="" />
                                                <span className={`   ${index == 0 ? 'h3' : 'span'} `}> {isLang === "en" ? item?.titleEn : item.titleAr}   </span>
                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>


                        <Col xl={4} lg={4} md={6} sm={12}>
                            <Row className='app__product_section3'>

                                {
                                    data6?.map((item, index) => (
                                        <Col xl={12} lg={12} md={12} sm={12}
                                            data-aos="flip-left"
                                            data-aos-duration="2000"
                                            data-aos-easing="ease-out-cubic"
                                        >
                                            <div className={`item_sec_3 py-2 px-4 ${index == 0 && 'item_section_color_dark'} flex flex-row   gap-3 align-items-center mt-6  `}>
                                                <img src={item.image} alt="" srcset="" />

                                                <span className={`   ${index == 0 ? 'h3' : 'span'} `}> {isLang === "en" ? item?.titleEn : item.titleAr}   </span>

                                            </div>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>

                        <Col xl={4} lg={4} md={6} sm={12}>
                            <Row className='app__product_section3'>

                                {
                                    data7?.map((item, index) => (
                                        <Col xl={12} lg={12} md={12} sm={12}
                                            data-aos="flip-left"
                                            data-aos-duration="2000"
                                            data-aos-easing="ease-out-cubic"
                                        >
                                            <div className={`item_sec_3 py-2 px-4 ${index == 0 && 'item_section_color'} flex flex-row   gap-3 align-items-center mt-6  `}>
                                                <img src={item.image} alt="" srcset="" />
                                                <span className={`   ${index == 0 ? 'h3' : 'span'} `}> {isLang === "en" ? item?.titleEn : item.titleAr}   </span>

                                            </div>
                                        </Col>
                                    ))
                                }

                            </Row>
                        </Col>





                    </Row>
                </section>

                <section className='app__Partners flex-column w-100'>
                    <div className="header">
                        <h3 data-aos="flip-left"
                            data-aos-duration="2000"
                            data-aos-easing="ease-out-cubic" >{t('about_Partners')}  <span className='seconed_color'>{t('app_title')}</span></h3>
                        <p data-aos="flip-left"
                            data-aos-duration="2000"
                            data-aos-easing="ease-out-cubic">{t('about_Partners_BODY')} </p>
                    </div>
                    <Row className='mt-5'>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div className="item_client"
                                data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-easing="ease-out-cubic" >
                                <img src={img.clients1} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="500"
                                data-aos-easing="ease-out-cubic"
                                className="item_client">
                                <img src={img.clients2} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="700"
                                data-aos-easing="ease-out-cubic"className="item_client">
                                <img src={img.clients3} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="900"
                                data-aos-easing="ease-out-cubic"className="item_client">
                                <img src={img.clients4} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="1000"
                                data-aos-easing="ease-out-cubic"className="item_client">
                                <img src={img.clients5} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="1200"
                                data-aos-easing="ease-out-cubic"className="item_client">
                                <img src={img.clients6} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="1500"
                                data-aos-easing="ease-out-cubic"className="item_client">
                                <img src={img.clients7} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="2000"
                                data-aos-easing="ease-out-cubic"className="item_client">
                                <img src={img.clients8} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="2200"
                                data-aos-easing="ease-out-cubic"className="item_client">
                                <img src={img.clients9} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="2500"
                                data-aos-easing="ease-out-cubic"className="item_client">
                                <img src={img.clients10} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="2700"
                                data-aos-easing="ease-out-cubic"className="item_client">
                                <img src={img.clients11} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="3000"
                                data-aos-easing="ease-out-cubic"className="item_client">
                                <img src={img.clients12} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="3200"
                                data-aos-easing="ease-out-cubic"className="item_client">
                                <img src={img.clients13} alt="" className='w-100' />
                            </div>
                        </Col>
                        <Col xl={2} lg={2} md={4} sm={6} className='flex justify-content-center align-items-center'>
                            <div data-aos="zoom-in-up"
                                data-aos-duration="2000"
                                data-aos-delay="3400"
                                data-aos-easing="ease-out-cubic"className="item_client">
                                <img src={img.clients14} alt="" className='w-100' />
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>
        </div>
    )
}

export default ProductPage