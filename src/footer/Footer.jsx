import style from './Footer.module.scss'
import linkImg from "../assets/images/linkedin.png"
import teleImg from "../assets/images/telegram.png"
import mailImg from "../assets/images/email.png"
import gitImg from "../assets/images/github.png"


export const Footer = () => {

    const linkedin = {
        backgroundImage: 'url(' + linkImg + ')',
    };

    const telegramm = {
        backgroundImage: 'url(' + teleImg + ')',
    };

    const email = {
        backgroundImage: 'url(' + mailImg + ')',
    };

    const github = {
        backgroundImage: 'url(' + gitImg + ')',
    };

    return (
        <div className={style.footerBlock}>
            <div className={style.title}>
                <h2>Anatoliy</h2>
            </div>
            <div className={style.iconBlock}>
                <div className={style.icon} style={linkedin}></div>
                <div className={style.icon} style={telegramm}></div>
                <div className={style.icon} style={email}></div>
                <div className={style.icon} style={github}></div>
            </div>
            <div className={style.footerText}>
                <span>Ⓒ 2022 Все права защищены</span>
            </div>
        </div>
    )
}