import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import img from '../../../constants/Img';
import { Link, useLocation } from 'react-router-dom';
import Icons from '../../../constants/Icons';

const About = () => {
  let { t } = useTranslation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageList = [img.About, img.About2];
  const imageList2 = [img.About4, img.About5];
  const [imageAos, setImageAos] = useState('fade-up'); // تأثير AOS الافتراضي
  const location = useLocation();
  // تبديل الصور تلقائيًا كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList2.length);
      setImageAos('fade-up'); // تغيير التأثير AOS عند تغيير الصورة
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, [])

  return (
    <div className="app__about">
      <Container>
        <Row className='mt-8'>
          <Col data-aos={t("fade_right")}
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic" xl={7} lg={7} md={7} sm={12} className='  flex flex-column justify-content-center'>
            <h1>{t('about_us_title')}</h1>
            <p>{t('about_us_body1')}</p>
            <p className='opacity-60'>{t('about_us_body2')} </p>
            {location.pathname !== '/' && <>
              <p className='opacity-60'>{t('about_us_body3')} </p>
              <p className='opacity-60'>{t('about_us_body4')} </p>
              <p className='opacity-60'>{t('about_us_body5')} </p>
            </>}
          </Col>
          <Col
            data-aos={t("fade_left")}
            data-aos-duration="2000"
            data-aos-easing="ease-out-cubic"
            xl={5} lg={5} md={5} sm={12}>
            {location.pathname === '/' ? <>
              <img
                src={imageList[currentImageIndex]}
                className='w-100'
                alt="currentImageIndex"
                data-aos={imageAos}
              />
            </> : <img
              src={imageList2[currentImageIndex]}
              className='w-100'
              alt="currentImageIndex"
              data-aos={imageAos}
            />}
          </Col>
        </Row>
        {location.pathname === '/' &&
          <div className="app__see_more mt-4 flex justify-content-center align-items-center gap-3" dir='ltr'>
            <div className="left">
              <Icons.rightSm />
              <Icons.right />
            </div>
            <Link to={'/about-us'} className='  fs-4 text'>{t('see_more')}</Link>
            <div className="right">
              <Icons.rightSm />
              <Icons.right />
            </div>
          </div>
        }
      </Container>
    </div>
  );
};

export default About;
