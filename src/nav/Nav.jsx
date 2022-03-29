import style from './Nav.module.scss'
import React from 'react'
import {Link, animateScroll as scroll} from "react-scroll";

export const Nav = () => {
    return (
        <nav className={style.navBlock}>
            <Link
                activeClass={style.active}
                to="main"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Main</Link>
            <Link
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Skills</Link>
            <Link
                activeClass={style.active}
                to="project"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Projects</Link>
            <Link
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Contacts</Link>
        </nav>
    )
}