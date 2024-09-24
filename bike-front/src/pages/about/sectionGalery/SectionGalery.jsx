import React from 'react'
import AboutSectionTitle from '../ui/aboutSectionTitle/AboutSectionTitle'
import styles from './SectionGalery.module.scss'

import galeryTeamImg from '../../../assets/img/about/galery-team-img.png'
import {galeryImgList} from './data/galeryImgList'
import SliderGalery from './components/slider/SliderGalery'

const SectionGalery = () => {
    return (
        <>
            <div className="container">
                <AboutSectionTitle titleText='WORLD-BIKE IS PRIMARILY A TEAM!' />
                <div className={styles.galeryDescWrapp}>
                    <div className={styles.galeryDesc}>
                        <p>All our employees are former professional cyclists, champions and prize—winners of European and USA competitions, members of the national team. Make no mistake, if anyone is able to provide you with truly professional advice, it's them.</p>

                        <div className={styles.galeryHelp}>
                            <h4 className={styles.galeryHelpSubtitle}>World-Bike consultants will help you with any question:</h4>
                            <span>choosing a bike for your height, weight, riding style and the purpose of buying a bike;</span>
                            <span>assistance in the selection of spare parts, accessories and equipment;</span>
                            <span>consultations on any topic related to sports.</span>
                        </div>
                    </div>
                    <img className={styles.galeryDescImg} src={galeryTeamImg} alt="men-with-bike" />
                </div>
                <AboutSectionTitle titleText='galery' />
            </div>
            <SliderGalery imgList={galeryImgList}/>
        </>
    )
}

export default SectionGalery
