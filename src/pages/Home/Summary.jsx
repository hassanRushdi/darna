import AOS from 'aos';
import React, { useEffect } from 'react';
import CountUp from 'react-countup';

import { useTranslation } from 'react-i18next';

const Summary = () => {
    let { t } = useTranslation();
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])
    return (
        <> 
            <div className="summary" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-out-cubic">
                <div className="content"> 
                    <div className="projects flex flex-column justify-content-center align-items-center">
                         <CountUp start={0}  className="num" end={670} duration={5} delay={3} />
                        <span className='text'> {t("project_available")}  </span>
                    </div>
                    <div className="projects flex flex-column justify-content-center align-items-center">
                        <CountUp start={0}  className="num" end={340} duration={5} delay={3} /> 
                        <span className='text'> {t("project_under_construction")}  </span>
                    </div>
                    <div className="projects flex flex-column justify-content-center align-items-center">
                        <CountUp start={0}  className="num" end={210} duration={5} delay={3} />
                        <span className='text'> {t("project_Previous")}   </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Summary
