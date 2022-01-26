import style from './Contacts.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import {Button} from "../common/button/Button";
import {Title} from "../common/title/Title";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title lable={"Contacts"} />
                <form action="#" className={style.form}>
                    <input type="text" placeholder={"Name"}/>
                    <input type="text" placeholder={"E-mail"}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder={"Your message"}></textarea>
                    <Button type='submit' label={'SEND MESSAGE'}/>
                </form>
            </div>
        </div>
    )
}