import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <nav className={style.navBlock}>
            <a href="#">Main</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contacts</a>
        </nav>
    )
}