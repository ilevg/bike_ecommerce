import React, { useContext } from 'react'
import { ActiveAuthComponentContext } from '../../../../context'

import Button from '../../../../UI/button/Button'
import styles from './ForgotPass.module.scss'

const ForgotPass = () => {
    const [activeAuthComponent, setActiveAuthComponent] = useContext(ActiveAuthComponentContext)
    const handleTabClick = (tab) => {
        setActiveAuthComponent(tab);
    };
    return (
        <>
            <h3 className={styles.title}>Forgot Your Password?</h3>

            <span className={styles.desc}>Enter your email. You will receive a link to create a new password by email.</span>

            <form className={styles.form} action="">
                <label className={styles.lable} htmlFor="resetEmail">E-mail</label>
                <input className={styles.input} type="text" name="resetEmail" id="resetEmail" />

                <div className={styles.btn} onClick={() => {
                    alert('The message has been sent!')
                    handleTabClick('login')
                }}>
                    <Button width='100%' text='Password Reset' />
                </div>

            </form>
        </>
    )
}

export default ForgotPass
