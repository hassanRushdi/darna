import React, { useContext, useEffect } from 'react'
import Component from '../../constants/Component'
import { LocalizationContext } from '../../context/LangChange'
import img from './../../constants/Img'
import './home.scss'
import Icons from '../../constants/Icons'

const Home = () => {
    let { loading, setLoading } = useContext(LocalizationContext)
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
    return (
        <div className='overflow-hidden'>
            <div className="">

                {loading ? (
                    <div className="app__loading flex justify-content-center align-items-center">
                         <Icons.LOGO />
                    </div>
                ) : (<></>
                )}
                <div className={`${loading ? 'vh-100 overflow-hidden' : ''}`}>
                    <Component.Video />
                    <Component.Summary />
                    <Component.Offer />
                    <Component.About />
                    <Component.Projects />
                    <Component.ProjectSite />
                    <Component.Product />
                    <Component.AboutUSHome />
                </div>
            </div>
        </div>
    )
}

export default Home