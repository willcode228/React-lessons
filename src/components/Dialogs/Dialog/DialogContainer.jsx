import { addDialogMessageActionCreator, updateDialogMessageActionCreator } from '../../../Redux/dialogs-reducer';
import Dialog from './Dialog';

const DialogContainer = (props) => {

    let state = props.store.getState();

    const onUpdateMessage = (text) => {
        props.store.dispatch(updateDialogMessageActionCreator(text));
    }
    const onAddMessage = () => {
        let text = state.Dialogs.textMessage
        if(text)
            props.store.dispatch(addDialogMessageActionCreator()) 
        }

    return ( <Dialog messageText={state.Dialogs.textMessage}
                    messageInfo={state.Dialogs.messageData}
                    messageUpdate={onUpdateMessage}
                    messageAdd={onAddMessage}/>);
}
export default DialogContainer;