import React from 'react'
import cardBg from '../../../../../assets/img/about/about-card-bg.png'
import LinkTag from '../../../../../UI/linkTag/LinkTag'
import styles from './SliderItem.module.scss'

const SliderItem = ({item}) => {
    return (
        <div key={item.id} className={styles.card}>
            <h3 className={styles.mainCardTitle}>{item.title}</h3>
            <p className={styles.mainCardDesc}>{item.desc}</p>
            <LinkTag to={item.link} text='More iformation' />
            <img className={styles.mainCardBg} src={cardBg} alt="card-bg" />
        </div>
    )
}

export default SliderItem
