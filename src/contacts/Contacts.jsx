import style from './Contacts.module.css'
import styleContainer from './../common/styles/Container.module.css'
import {Button} from "../common/button/Button";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <form action="#" className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <Button type='submit' lable={'Отправить'}/>
                </form>

            </div>
        </div>
    )
}