import s from './Dialogs.module.css'
import { Main } from "../StyledComponents/Main";


const Dialogs = () => {
    return (
        <Main className={s.dialogs}>

            <ul className={s.dialogs__list}>
                <li className={s.dialogs__item}>Valera</li>
                <li className={s.dialogs__item}>Nikita</li>
                <li className={s.dialogs__item}>Xuita</li>
                <li className={s.dialogs__item}>Xulera</li>
            </ul>

            <ul className={s.messages}>
                <li className={s.messages__item}>Hey</li>
                <li className={s.messages__item}>Hey</li>
                <li className={s.messages__item}>Hey</li>
                <li className={s.messages__item}>Hey</li>
            </ul>

        </Main>
    );
}

export default Dialogs;
