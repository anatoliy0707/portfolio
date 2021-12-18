import style from './Nav.module.css'

export const Nav = () => {
    return (
        <nav className={style.navBlock}>
            <a href="#">Главная</a>
            <a href="#">Скилы</a>
            <a href="#">Проекты</a>
            <a href="#">Контакты</a>
        </nav>
    )
}