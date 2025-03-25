import { Button } from 'primereact/button'
import React, { useEffect, useState ,useContext} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Icons from '../../../constants/Icons'
import { ProductService } from './ProductService'
import './products.scss'
import { LocalizationContext } from '../../../context/LangChange'
import AOS from 'aos'

const Product = () => {

    let { t } = useTranslation()
    let { isLang } = useContext(LocalizationContext);

    const [data, setData] = useState([]);
    useEffect(() => {
        ProductService.getProducts().then((data) => setData(data));
    }, []);
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])
    return (
        <>
            <div className="app_products overflow-hidden">
                <Container  >
                    <h2 className='text-center'> {t('nav_product')}  </h2>
                    <Row className=''>
                        {
                            data?.map((item, index) => (
                                <Col key={index} xl={6} lg={6} md={6} sm={12}>
                                    <div className="item   "
                                    data-aos={`${index %2!=0 ?"fade-right":"fade-left"}`}
                                    data-aos-duration="1500"
                                    data-aos-anchor-placement="top-bottom"
                                    data-aos-easing="ease-out-cubic">
                                        {item.icon}
                                        <p>{isLang === "en" ? item.nameEn : item.nameAr}</p> 
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                    <div className="app_products_btn">
                        <Link to={'/facilities'}>
                            <Button data-aos="flip-right"
                                data-aos-duration="2000"
                                data-aos-easing="zoom-in-up" className='  mt-5' severity="warning" label={t('product_btn')} icon={<Icons.ArrowOutlit />} />
                        </Link>
                    </div>

                </Container>
            </div>
        </>
    )
}

export default Product