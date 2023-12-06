import React, { useEffect, useState, useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Component from '../../../constants/Component'
import Icons from '../../../constants/Icons'
import img from '../../../constants/Img'
import { ProductService } from './ProductService'
import { LocalizationContext } from '../../../context/LangChange'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'

const Details2_1 = () => {
  const [products, setProducts] = useState([]);
  let { isLang } = useContext(LocalizationContext)
  let { t } = useTranslation()
  useEffect(() => {
      window.scroll(0, 0)
      ProductService.getProducts().then((data) => setProducts(data));
  }, []);
      useEffect(() => {
      AOS.init({
          once: false,
      });
      AOS.refresh();
  }, [])
  return (
    <div>
    <Component.HeaderPage image={img?.PreviousBg} title={t('project_available')} />
    <Container className='app__products'>
        <Row className='flex justify-content-center align-items-center'>
            {
                products?.map((product, index) => (
                    <Col key={index} xl={6} lg={6} md={6} sm={12} >
                        <Link to={'/previous-projects/architecture_details/2'}    data-aos={`${index % 2 == 0 ? t('fade_right') : t('fade_left')}`}
                            data-aos-duration="1000"
                            data-aos-delay={`${index * 100}`}
                            data-aos-easing="linear">
                            <div className="surface-border border-round m-2 text-center  " >
                                <div className="mb-3 name_place">
                                    <img src={`${product.image}`} alt={product.name} className="w-100 shadow-2" />
                                    <span> {isLang === "en" ? product?.nameEn : product?.name} </span>

                                </div>
                                <div className='flex flex-row gap-0  justify-content-center align-items-center'>
                                    <h4 className="m-0 p-0 text-dark">{product.code} </h4>
                                    <div className="icons_details_project">
                                        <Icons.ArrowRight />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </Col>
                ))

            }
        </Row>
    </Container>

</div>
  )
}

export default Details2_1