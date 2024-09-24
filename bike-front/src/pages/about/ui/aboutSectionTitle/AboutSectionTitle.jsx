import React from 'react'
import SectionTitle from '../../../../UI/sectionTitle/SectionTitle'
import styles from './AboutSectionTitle.module.scss'

const AboutSectionTitle = ({titleText}) => {
    return (
        <div className={styles.aboutSectionTitle}>
            <SectionTitle titleText={titleText} />
        </div>
    )
}

export default AboutSectionTitle
