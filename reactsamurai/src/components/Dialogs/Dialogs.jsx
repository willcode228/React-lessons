import s from './Dialogs.module.css'
import { Main } from "../StyledComponents/Main";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = () => {

    let dataDialogs = [
        {user: 'Sveta', id: "1"},
        {user: 'Sacha', id: "2"},
        {user: 'Lera', id: "3"},
        {user: 'Nika', id: "4"},
        {user: 'Valera', id: "5"},
        {user: 'Victor', id: "6"},
    ];

    let userElements = dataDialogs.map( dialog => <Dialog name={dialog.user} id={dialog.id}/>);

    let dataMessages = [
        {text: 'Hey', id: 1},
        {text: 'Hey', id: 2},
        {text: 'Hey', id: 3},
        {text: 'Hey', id: 4},
        {text: 'Hey', id: 5},
    ];

    let messagesElements = dataMessages.map(message => <Message text={message.text} />)

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
