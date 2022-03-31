import style from './Header.module.scss'
import {Nav} from "./nav/Nav";
import Fade from 'react-reveal/Fade';

export const Header = () => {
    return (
        <nav className={style.header}>
            <Fade right>
                <Nav/>
            </Fade>
        </nav>
    )
}