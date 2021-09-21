import s from './Dialogs.module.css'
import { Main } from "../StyledComponents/Main";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

    let userElements = props.data.dialogs.map( dialog => <Dialog name={dialog.user} id={dialog.id}/>),
        messagesElements = props.data.messages.map(message => <Message text={message.text} />)

    return (
        <Main className={s.dialogs}>

            <ul className={s.dialogs__list}>
                { userElements }
            </ul>

            <ul className={s.messages__list}>
                { messagesElements }
            </ul>

        </Main>
    );
}

export default Dialogs;
