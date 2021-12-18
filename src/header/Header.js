import style from './Header.module.css'
import {Nav} from "../nav/Nav";

export const Header = () => {
    return (
        <nav className={style.header}>
            <Nav/>
        </nav>
    )
}