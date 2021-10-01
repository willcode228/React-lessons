import s from './Dialogs.module.css'
import { Main } from "../StyledComponents/Main";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {

    let userElements = props.dialogs.map( dialog => <Dialog name={dialog.user} key={dialog.id} id={dialog.id}/>),
        messagesElements = props.messages.map(message => <Message text={message.text} key={message.id}/>);

    const add = () => {
        props.addMessage();
    }

    const change = (e) => {
        props.changeAreaText(e.target.value);
    }

    return (
        <Main className={s.dialogs}>

            <ul className={s.dialogs__list}>
                { userElements }
            </ul>

            <div className={s.messages__wrapper}>

                <ul className={s.messages__list}>
                    { messagesElements }
                </ul>

                <div className={s.form}>
                    <textarea placeholder="Your message here" value={props.text} onChange={ change }/>
                    <button onClick={ add } >Add new message</button>
                </div>
            </div>

        </Main>
    );
}

export default Dialogs;
