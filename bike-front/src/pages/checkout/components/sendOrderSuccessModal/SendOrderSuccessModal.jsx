import React from 'react'
import styles from './SendOrderSuccessModal.module.scss'
import CloseBtn from '../../../../UI/closeBtn/CloseBtn'
import Button from '../../../../UI/button/Button'
import { Link } from 'react-router-dom'

const SendOrderSuccessModal = ({orderNumb, setOrderNumber}) => {
    return (
        <div className={styles.modalCont}>
            <div className={styles.modal}>
                <div className={styles.titleConnt}>
                    <p className={styles.title}>Your order #{orderNumb} is confirmed</p>
                    <CloseBtn onClickFunc={() => setOrderNumber(null)}/>
                </div>
                <p className={styles.text}>Thank you for your order! <span className={styles.textWarrning}>Please note that notifications regarding order status will be sent to your email.</span> Your items will be carefully prepared and shipped to you shortly. We appreciate your business and look forward to serving you again in the future.  Have a great day!</p>
                <Link to='/trade-in'>
                    <Button text='Continue shopping' width='100%' />
                </Link>
            </div>
        </div>
    )
}

export default SendOrderSuccessModal
