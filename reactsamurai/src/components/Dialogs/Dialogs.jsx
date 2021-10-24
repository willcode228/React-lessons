import s from './Dialogs.module.css'
import { Main } from "../StyledComponents/Main";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {

    let userElements = props.dialogs.map( dialog => <Dialog name={dialog.user} key={dialog.id} id={dialog.id}/>),
        messagesElements = props.messages.map(message => <Message text={message.text} key={message.id}/>);

    const add = (message) => {
        props.addMessage(message.newMessageBody);
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

                <ReduxAddMessageForm onSubmit={add} />
            </div>

        </Main>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <Field component='textarea' name='newMessageBody' placeholder='New message...' />
            <button>Add new message</button>
        </form>
    );
}

const ReduxAddMessageForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;
