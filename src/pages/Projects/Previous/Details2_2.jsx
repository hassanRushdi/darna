import AOS from 'aos'
import cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Component from '../../../constants/Component'
import Icons from '../../../constants/Icons'
import img from '../../../constants/Img'
import { ProductService } from './ProductService'

const Details2_2 = () => {
  let { t } = useTranslation()
  const [deliverables, setDeliverables] = useState([]);
  const [list, setlist] = useState([]);
  useEffect(() => {
    window.scroll(0, 0)
    ProductService.getDeliverables().then((data) => setDeliverables(data));
    ProductService.getListAbout().then((data) => setlist(data));
  }, [])
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, [])
  return (
    <>
      <Component.HeaderPageDetails image={img?.PreviousBg} />
      <Container className='app__building'>
        <Row className=''>
          <Col xl={8} lg={8} md={12} sm={12}>
            <div className="content">
              <div className="header" data-aos="flip-left"
                data-aos-duration="2000"
                data-aos-easing="ease-out-cubic">
                <Icons.Dotes /><h3 >{t("architecture_details_title1")}</h3>
              </div>
              <div className="list">
                <p className='w-75'> {cookies.get('i18next') === "en" ? list[0]?.nameEn : list[0]?.nameAr}</p>
                <ul data-aos="zoom-in-left"
                  data-aos-duration="1000"
                  data-aos-easing="linear" className='mt-5'>
                  {
                    list.slice(1).map((item, index) => (
                      <li key={index}> <b>   {cookies.get('i18next') === "en" ? item.titleEn : item.titleAr} </b> {cookies.get('i18next') === "en" ? item.nameEn : item.nameAr}</li>
                    ))
                  }

                </ul>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={4} md={6} sm={12}>
          <div className="btn_ready flex justify-content-end">
              <div data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="linear" className="ready flex flex-row align-items-center justify-content-center gap-4">
                <Icons.DoneP />
                <div className="content  ">
                  <h3 className='m-0 p-0'>Delivered </h3>
                  {/* <p className='m-0 p-0'>for delivery</p> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='mt-6'>
          <div className="content">
            <div className="header" data-aos="flip-left"
              data-aos-duration="2000"
              data-aos-easing="ease-out-cubic">
              <Icons.Dotes /><h3>{t("architecture_details_title2")} </h3>
            </div>
          </div>

          {
            deliverables?.map((item, index) => (
              <Col key={index} xl={4} lg={4} md={6} sm={12} data-aos="zoom-in-left"
                data-aos-duration="1000"
                data-aos-delay={`${index * 100}`}
                data-aos-easing="linear">
                <div className="icons">
                  <img src={item.icon} className='p-2 object-fit-contain' style={{ width: '64px', height: '64px' }} />
                  <span> {cookies.get('i18next') === "en" ? item?.nameEn : item?.nameAr}  </span>
                </div>
              </Col>
            ))
          }




        </Row>

        <div className="draw mt-8">
          <img data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="linear" src={img.draw1} alt="draw1" className='w-100' />
          <img data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="linear" src={img.draw2} alt="draw1" className='w-100' />
          <img data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="linear" src={img.draw3} alt="draw1" className='w-100' />
          <div data-aos="zoom-in-down"
            data-aos-duration="1000"
            data-aos-easing="linear" className="top"></div>
          <div data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-easing="linear" className="bottom"></div>
        </div>
      </Container>
    </>
  )
}

export default Details2_2