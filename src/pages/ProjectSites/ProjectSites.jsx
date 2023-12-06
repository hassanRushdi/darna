import AOS from 'aos'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import img from '../../constants/Img'
import './ProjectSites.scss'

const ProjectSites = () => {
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
            <div className="app__project_site_about_page">
                <Container>
                    <h1 data-aos="flip-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">{t('project_home')}</h1>
                    <Row className='flex justify-content-center align-items-center'>
             
                        <Col xl={8} lg={8} md={12} sm={12}>
                            <div className="overlay_about_home2 mt-4"
                                data-aos="flip-down"
                                data-aos-duration="3000"
                                data-aos-easing="ease-out-cubic">
                                <img src={img.MapHome} alt="" className='w-100' />
                                <div className="overlay">
                                    <h1>{t('District')} </h1>
                                    <p>({t('5TH')} )</p>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default ProjectSites