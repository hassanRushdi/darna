import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AnimatePresence, motion } from 'framer-motion';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';
import React, { useContext, useEffect, useState } from 'react';
import { Dropdown, Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Icons from '../../constants/Icons';
import img from '../../constants/Img';
import { LocalizationContext } from '../../context/LangChange';
import './navbar.scss';
import routes from './routes';
const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb',
    },
    {
        code: 'ar',
        name: 'العربية',
        dir: 'rtl',
        country_code: 'sa',
    },
]

const NavBar = ({ navbarColor }) => {
    const [activeLink, setActiveLink] = useState(0);

    const currentLanguageCode = cookies.get('i18next') || 'en'
    const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
    const { t } = useTranslation()

    let { isLang, setIsLang } = useContext(LocalizationContext);
    useEffect(() => {
        document.body.dir = currentLanguage.dir || 'ltr';

    }, [currentLanguage, t])
    const handleLanguageChange = (newLanguage) => {
        setIsLang(newLanguage);
    };

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const [visibleRight, setVisibleRight] = useState(false);

    const handleLinkClick = (index) => {
        setActiveLink(index);
        setVisibleRight(false)
    };
    return (
        <div className='app__navbar '  >
            <AnimatePresence >
                {scrollPosition <= 400 && (
                    <motion.div
                        className="navbar__social   "
                        initial={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}>
                        <Navbar className={`px-4 navbar__social-Container  `} >
                            <div className="calling w-100 container flex justify-content-between">
                                <motion.a
                                    href={`tel:+201111353089`}
                                    target='_blank' rel="noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    className='flex flex-row gap-2 align-items-center hotline'
                                >
                                    <Icons.Phone className='text-light no-fill' />  <span className='text-light  '>17347</span>
                                </motion.a>
                                <div className="sm_navbar">
                                    <motion.a
                                        href={`https://www.google.com/maps/place/30%C2%B000'41.5%22N+31%C2%B024'45.7%22E/@30.0115242,31.4101105,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0115242!4d31.4126854?entry=ttu`}
                                        target='_blank' rel="noreferrer"
                                        className='flex flex-row gap-2 align-items-center line3 '
                                    >
                                        <Icons.location className='navbar-sm-icons-phone navbar-location' />  <span className='text-black navbar_icons_sm'>     {t('contact_address')}</span>
                                    </motion.a>
                                </div>
                                <div className="social">
                                    <div className="social_media">
                                        <motion.a
                                            href={'https://www.facebook.com/darnadevelopments'}
                                            target='_blank' rel="noreferrer"
                                            whileHover={{ scale: 1.3 }}
                                            transition={{ duration: 0.3 }}
                                            className='m-0 p-0'
                                        >
                                            <div>
                                                <img src={img.facebook} className alt="" srcset="" />
                                            </div>
                                        </motion.a>
                                        {/*                         <motion.a
                                            href={'https://www.facebook.com/'}
                                            target='_blank' rel="noreferrer"
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ duration: 0.3 }}
                                        > 
                                            <div style={{ width: '25px', height: '25px' }}>
                                                <img src={img.twitter} className='w-100 object-fit-contain' alt="" srcset="" />
                                            </div>
                                        </motion.a>  */}
                                        <motion.a
                                            href="https://wa.me/+201111353089"
                                            target='_blank' rel="noreferrer"
                                            whileHover={{ scale: 1.2 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div style={{width: '25px'}}>
                                                <img src={img.whatsappDark} className='object-fit-contain w-100' alt="" srcset="" />
                                            </div>
                                        </motion.a>
                                        <motion.a
                                            href={'https://www.linkedin.com/company/darnadevelopments/'}
                                            target='_blank' rel="noreferrer"
                                            whileHover={{ scale: 1.3 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div>
                                                <img src={img.linkedin}  className='' alt="" srcset="" />
                                            </div>
                                        </motion.a>
                                        <motion.a
                                            href={'https://www.youtube.com/@darnadevelopments'}
                                            target='_blank' rel="noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.3 }}
                                        >

                                            <div>
                                                <img src={img.youtube} alt="" srcset="" />
                                            </div>
                                        </motion.a>

                                        
                                    </div>
                                </div>

                            </div>
                        </Navbar>
                    </motion.div>
                )}
            </AnimatePresence >
            <Navbar
                dir='rtl'
                fixed={scrollPosition > 400 ? 'top' : 'top'}
                collapseOnSelect
                expand="sm"
                className={`${navbarColor} ${scrollPosition > 400 ? 'scroll navbar-navOnthorPAge shadow-sm ' : ''}`}
            >
                <div className="flex justify-content-between align-items-center  w-100 container" dir={cookies.get('i18next') === "en" ? 'rtl' : 'ltr'}>
                    <div className="nav_links flex justify-content-between">
                        <div className="  sidebar_sm">
                            <Nav>
                                <Nav.Item>
                                    {
                                        cookies.get('i18next') === "en" ?
                                            <div className="change-lang  "
                                                onClick={() => {
                                                    handleLanguageChange('ar')
                                                    i18next.changeLanguage('ar')
                                                }}  >
                                                <Icons.Language />
                                                <span className='text ' style={{ marginBottom: '4px' }}>  عربيه</span>
                                            </div> :
                                            <div className="change-lang" onClick={() => {
                                                handleLanguageChange('en')
                                                i18next.changeLanguage('en')
                                            }} >
                                                <Icons.Language />
                                                <span className='text ' /* style={{ marginBottom: '2px' }} */>  English</span>
                                            </div>
                                    }
                                    <Nav.Link as={Link} to='/contact-us' className='text-light'>{t('nav_contact')}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={Link} to='/about-us' className='text-light'> {t('nav_about')}</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Nav className={`${cookies.get('i18next') === "en" ? 'dropdown_en' : 'dropdown_ar'}`}>
                                <Nav.Link as={Link} to='/product' className='text-light'> {t('nav_product')} </Nav.Link>
                                <Nav.Link as={Link} to='/media' className='text-light'>{t('nav_media')} </Nav.Link>
                                <Dropdown  >
                                    <Dropdown.Toggle id="dropdown-basic">
                                        {t('nav_project')}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/project-available"> {t('project_available')}  </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/under-construction-projects"> {t('project_under_construction')} </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/previous-projects">{t('project_Previous')} </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/previous-projects">{t('project_Receipt')} </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/previous-projects">{t('project_Darna')} </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Nav.Link as={Link} to='/' className='text-light'>{t('nav_home')}</Nav.Link>
                            </Nav>
                        </div>
                        <div className="sidebar_lg">
                            <Button icon={<MenuOutlinedIcon fontSize='medium' sx={{ color: '#fff' }} />} rounded outlined style={{color: 'white'}} onClick={() => setVisibleRight(true)} />
                        </div>
                        <Sidebar className='bg_sidebar view_sidebar_home-page' position={cookies.get('i18next') === "en" ? "right" : "right"} visible={visibleRight} onHide={() => setVisibleRight(false)}>
                            <div className="navbar_sm_page  ">
                                <div className="   d-flex flex-column   " >
                                    <section className={'routes  '} >
                                        {routes?.map((root, i) => {
                                            return (
                                                <div key={i}>
                                                    <Link
                                                        to={root.path}
                                                        className={`link ${activeLink === i ? 'active' : ''}  ${isLang === "en" ? 'justify-content-start' : 'justify-content-start'}`}
                                                        onClick={() => handleLinkClick(i)}
                                                    >
                                                        <div className={`icon  ${activeLink === i ? 'active' : ''}`} id={root.name} data-tooltip-content={root.nameEn}>
                                                            {root.icon}
                                                        </div>
                                                        <div className="link_text">{isLang === "en" ? root.nameEn : root.nameAr}</div>
                                                    </Link>
                                                </div>
                                            );
                                        })}
                                        <Dropdown  >
                                            <div className={`link   ${isLang === "en" ? 'justify-content-start flex flex-row' : 'justify-content-start'}`}>
                                                <div className={`icon   `}  >
                                                    <Icons.ProjectsIcons className="logoSvg" style={{ width: 20 }} />
                                                </div>
                                                <Dropdown.Toggle id="dropdown-basic" className='flex flex-row justify-content-center align-items-center m-0 p-0'>
                                                    <div className="link_text"> {t('nav_project')}  </div>
                                                </Dropdown.Toggle>
                                            </div>
                                            <Dropdown.Menu>
                                                <Dropdown.Item onClick={() => handleLinkClick()} as={Link} to="/project-available"> {t('project_available')}  </Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleLinkClick()} as={Link} to="/under-construction-projects"> {t('project_under_construction')} </Dropdown.Item>
                                                <Dropdown.Item onClick={() => handleLinkClick()} as={Link} to="/previous-projects">{t('project_Previous')} </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </section>
                                </div>

                                <div className="change_lang-sidebar " dir='rtl '>
                                    {
                                        isLang === "en" ?
                                            <motion.div
                                                className='app__menu-talk cursor-pointer'
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.8 }}
                                                onClick={() => {
                                                    handleLanguageChange('ar')
                                                    i18next.changeLanguage('ar')
                                                    handleLinkClick()
                                                }}

                                            >
                                                عربيه
                                                <img src={img.ArLang} alt="images" />
                                            </motion.div> :
                                            <motion.div
                                                className='app__menu-talk cursor-pointer'
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.8 }}
                                                onClick={() => {
                                                    handleLanguageChange('en')
                                                    i18next.changeLanguage('en')
                                                    handleLinkClick()

                                                }}
                                            >
                                                English
                                                <img src={img.EnLang} alt="images" />
                                            </motion.div>
                                    }
                                </div>
                            </div>
                        </Sidebar>
                    </div>
                    <Link to='/' onClick={() => window.scroll(0, 0)}>

                        <img src={img.Logo} style={{ width: '100%', height: '92px' }} alt="logo right click" />

                    </Link>
                </div>
            </Navbar>
        </div>
    )
}

export default NavBar
