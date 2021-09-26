import s from './Dialogs.module.css'
import { Main } from "../StyledComponents/Main";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import MessageForm from './MessageForm/MessageForm';

const Dialogs = (props) => {

    let userElements = props.data.dialogs.map( dialog => <Dialog name={dialog.user} key={dialog.id} id={dialog.id}/>),
        messagesElements = props.data.messages.map(message => <Message text={message.text} key={message.id}/>)

    return (
        <Main className={s.dialogs}>

            <ul className={s.dialogs__list}>
                { userElements }
            </ul>

            <div className={s.messages__wrapper}>
                <ul className={s.messages__list}>
                    { messagesElements }
                </ul>
                <MessageForm />
            </div>

        </Main>
    );
}

export default Dialogs;
