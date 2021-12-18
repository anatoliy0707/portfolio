import style from './Footer.module.css'
import styleContainer from './../common/styles/Container.module.css'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h2 className={style.title}>Anatoliy Sukhanov</h2>
                <div className={style.iconBlock}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <span className={style.footerText}>Ⓒ 2022 Все права защищены</span>
            </div>
        </div>
    )
}