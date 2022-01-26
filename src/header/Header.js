import style from './Header.module.scss'
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <nav className={style.header}>
            <Nav/>
        </nav>
    )
}