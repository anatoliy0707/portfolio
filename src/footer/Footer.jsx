import style from './Footer.module.scss'
import styleContainer from './../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.title}>
                <h2>Anatoliy</h2>
            </div>
            <div className={style.iconBlock}>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
            </div>
            <div className={style.footerText}>
                <span>Ⓒ 2022 Все права защищены</span>
            </div>
        </div>
    )
}