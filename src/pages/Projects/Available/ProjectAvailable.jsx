import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Component from '../../../constants/Component'
import img from '../../../constants/Img'
import AOS from 'aos'

const ProjectAvailable = () => {
  let { t } = useTranslation()
  useEffect(() => {
    window.scroll(0, 0)
  }, [])


  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, [])
  return (
    <>
      <Component.HeaderPage image={img?.AvailableBg} title={t('project_available')} />
      <div className="app__project_site_about_page">
        <Container>
          <Row className='flex justify-content-center align-items-center'>

            <Col xl={6} lg={6} md={6} sm={12}>
              <Link to={'/project-available/details/2'}>
                <div className="overlay_about_home2 mt-4" data-aos="flip-left"
                  data-aos-duration="2000"
                  data-aos-easing="ease-out-cubic">
                  <img src={img.project6} alt="" className='w-100' />
                  <div className="overlay">
                    <h1>{t('District')} </h1>
                    <p>({t('5TH')} )</p>
                  </div>
                </div>
              </Link>

            </Col>

          </Row>
        </Container>
      </div>
    </>
  )
}

export default ProjectAvailable
