import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Modal } from 'react-bootstrap'
import img from '../../../constants/Img'
import { Button } from 'primereact/button';
import Icons from '../../../constants/Icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import { Image } from 'primereact/image';
import cookies from 'js-cookie';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ProjectSite = () => {
    let { t } = useTranslation()
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])

    return (
        <div className="app__project_site">
            <Container fluid>
                <Row className='app__project_site_images' dir='ltr'>
                    <Col xl={6} lg={6} md={5} sm={12} data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic" className='position-relative'>
                        <div className='position-  map_image'>
                            <img src={img.MapHome} className='w-100 cursor-pointer' alt="cubic" dir='ltr' onClick={() => setModalShow(true)}/>
                        </div>

                    </Col>
                    <Col data-aos="fade-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic" xl={6} lg={6} md={7} sm={12} className='flex justify-content-center flex-column align-items-center  ' >
                        <h1> {t('project_home')}    </h1>
                        <p className='text-center'>{t('project_desc')}<span> {t('app_title')} </span>  {t('project_desc1')} </p>
                        <Link to={'/project-available'}>
                            <Button data-aos="flip-right"
                                data-aos-duration="2000"
                                data-aos-easing="zoom-in-up" className='mt-3' severity="warning" label={t('project_btn')} icon={<Icons.ArrowOutlit />} style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between' }} />
                        </Link>
                    </Col>
                </Row>
            </Container>

            <Modal show={modalShow} size='xl' centered onHide={() => setModalShow(false)} aria-labelledby="contained-modal-title-vcenter">

                <Modal.Body className="grid-example">
                    <Container>


                        <Row className='flex justify-content-center '>
                            <TransformWrapper
                                initialScale={1}
                                initialPositionX={200}
                                initialPositionY={100}
                            >
                                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                    <React.Fragment>
                                        <div className="tools flex flex-row gap-3 mb-5">
                                            <Button icon="pi pi-plus" rounded outlined  raised  onClick={() => zoomIn()}/>
                                            <Button icon="pi pi-minus" rounded outlined raised  onClick={() => zoomOut()}/>
                                            <Button icon="pi pi-times" rounded outlined raised  onClick={() => resetTransform()}/>
                                        </div>
                                        <TransformComponent>
                                            <img className='w-100' src={img.MapHome} alt="test" />
                                        </TransformComponent>
                                    </React.Fragment>
                                )}
                            </TransformWrapper>


                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default ProjectSite