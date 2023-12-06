import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AOS from 'aos';
import { Carousel } from 'primereact/carousel';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Icons from '../../../constants/Icons';
import { LocalizationContext } from '../../../context/LangChange';
import { ProductService } from './ProductService';
import './project.scss';
import Slider from 'react-slick'

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // your primary color 
        },
        secondary: {
            main: '#D6C486', // your new secondary color 
        },
    },
});
const Projects = () => {
    const [value, setValue] = useState(0);
    let { t } = useTranslation()
    let { isLang } = useContext(LocalizationContext)
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);

    };
    const [underConstruction, setUnderConstruction] = useState([]);
    const [available, setAvailable] = useState([]);
    const [previous, setPreviousData] = useState([]);

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 2
        },
        {
            breakpoint: '768px', // Add a breakpoint for screen widths between 767px and 991px
            numVisible: 2,       // Display 2 items in that range
            numScroll: 2
        }
    ];

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])
    useEffect(() => {
        ProductService.getUnderConstructionData().then((data) => setUnderConstruction(data));
        ProductService.getAvailableData().then((data) => setAvailable(data));
        ProductService.getPrevious().then((data) => setPreviousData(data));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="surface-border border-round m-2 text-center">
                <div className="mb-3 name_place2">
                    <Link to={'/project-available/architecture_details/2'}>
                        <img src={`${product.image}`} alt={product.name} className="w-100 shadow-2" />
                    </Link>
                    <span > {isLang === "en" ? product?.nameEn : product?.name} </span>
                </div>
                <div className='flex flex-row gap-0 justify-content-center align-items-center'>
                    <h4 className="mb-1">{product.code} </h4>
                    <Icons.ArrowRight />
                </div>
            </div>
        );
    };
    return (
        <>
            <div className="app_projects" dir='ltr'>
                <h2 className='text-center' data-aos="flip-right"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic">{t('project_title')}</h2>
                <ThemeProvider theme={theme}>
                    <Box sx={{ width: '100%', margin: 'auto', marginTop: '50px', display: 'flex', justifyContent: 'center', padding: '5px', borderRadius: '15px', background: '#fff' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="inherit"
                            variant="scrollable"
                            scrollButtons="auto"
                            allowScrollButtonsMobile
                            indicatorColor="secondary"
                            // centered={true}
                            TabIndicatorProps={{ style: { backgroundColor: theme.palette.secondary.main, height: "3px", borderRadius: "50px" } }}
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab style={{ textTransform: 'capitalize', justifyContent: 'center' }} value={0} label={t('project_available_short')} variant={value === 0 ? 'contained' : 'standard'} sx={{ justifyContent: 'center' }} />
                            <Tab style={{ textTransform: 'capitalize', justifyContent: 'center' }} value={1} label={t('project_under_construction_short')} variant={value === 1 ? 'contained' : 'standard'} sx={{ justifyContent: 'center' }} />
                            <Tab style={{ textTransform: 'capitalize', justifyContent: 'center' }} value={2} label={t('project_Previous_short')} variant={value === 2 ? 'contained' : 'standard'} sx={{ justifyContent: 'center' }} />
                        </Tabs>
                    </Box>


                </ThemeProvider>

                {value === 0 && (
                    <Box sx={{ overflow: 'hidden', marginTop: "20px" }} data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">

                        <Slider {...settings}>
                            {
                                available?.map((item, index) => (
                                    <div className="surface-border border-round p-2 text-center">
                                        <div className="mb-3 name_place2">
                                            <Link to={'/project-available/architecture_details/2'}>
                                                <img src={`${item.image}`} alt={item.name} className="w-100 h-100 shadow-2" />
                                            </Link>
                                            <span > {isLang === "en" ? item?.nameEn : item?.name} </span>
                                        </div>
                                        <div className='flex flex-row gap-0 justify-content-center align-items-center'>
                                            <h4 className="mb-1">{item.code} </h4>
                                            <Icons.ArrowRight />
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>

                        <div data-aos="flip-right"
                            data-aos-duration="2000"
                            data-aos-easing="zoom-in-up" className="app__see_more flex justify-content-center align-items-center gap-3">
                            <div className="left">
                                <Icons.rightSm />
                                <Icons.right />
                            </div>
                            <Link to={'/project-available'} className='  fs-4 text'>{t('see_more')}</Link>
                            <div className="right">
                                <Icons.rightSm />
                                <Icons.right />
                            </div>
                        </div>

                    </Box>
                )}

                {value === 1 && (
                    <Box sx={{ overflow: 'hidden', marginTop: "20px" }} data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic">
                        <Slider {...settings}>
                            {
                                available?.map((item, index) => (
                                    <div className="surface-border border-round p-2 text-center">
                                        <div className="mb-3 name_place2">
                                            <Link to={'/project-available/architecture_details/2'}>
                                                <img src={`${item.image}`} alt={item.name} className="w-100 h-100 shadow-2" />
                                            </Link>
                                            <span > {isLang === "en" ? item?.nameEn : item?.name} </span>
                                        </div>
                                        <div className='flex flex-row gap-0 justify-content-center align-items-center'>
                                            <h4 className="mb-1">{item.code} </h4>
                                            <Icons.ArrowRight />
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>

                        <div className="app__see_more flex justify-content-center align-items-center gap-3">
                            <div className="left">
                                <Icons.rightSm />
                                <Icons.right />
                            </div>
                            <Link to={'/project-available'} className='  fs-4 text'>{t('see_more')}</Link>
                            <div className="right">
                                <Icons.rightSm />
                                <Icons.right />
                            </div>
                        </div>

                    </Box>
                )}

                {value === 2 && (
                    <Box sx={{ overflow: 'hidden', marginTop: "20px" }} data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-easing="ease-out-cubic">
                        <Slider {...settings}>
                            {
                                available?.map((item, index) => (
                                    <div className="surface-border border-round p-2 text-center">
                                        <div className="mb-3 name_place2">
                                            <Link to={'/project-available/architecture_details/2'}>
                                                <img src={`${item.image}`} alt={item.name} className="w-100 h-100 shadow-2" />
                                            </Link>
                                            <span > {isLang === "en" ? item?.nameEn : item?.name} </span>
                                        </div>
                                        <div className='flex flex-row gap-0 justify-content-center align-items-center'>
                                            <h4 className="mb-1">{item.code} </h4>
                                            <Icons.ArrowRight />
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>

                        <div className="app__see_more flex justify-content-center align-items-center gap-3">
                            <div className="left">
                                <Icons.rightSm />
                                <Icons.right />
                            </div>
                            <Link to={'/project-available'} className='  fs-4 text'>{t('see_more')}</Link>
                            <div className="right">
                                <Icons.rightSm />
                                <Icons.right />
                            </div>
                        </div>

                    </Box>
                )}

            </div>
        </>
    )
}

export default Projects