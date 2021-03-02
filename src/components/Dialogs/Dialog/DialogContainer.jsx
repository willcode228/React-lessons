import { addDialogMessageActionCreator, updateDialogMessageActionCreator } from '../../../Redux/dialogs-reducer';
import StoreContext from '../../../StoreContext';
import Dialog from './Dialog';

const DialogContainer = () => {

    return ( 
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    const onUpdateMessage = (text) => {
                        store.dispatch(updateDialogMessageActionCreator(text));
                    }
                    const onAddMessage = () => {
                        let text = state.Dialogs.textMessage
                        if(text) store.dispatch(addDialogMessageActionCreator()) 
                        }
                    return (
                        <Dialog messageText={state.Dialogs.textMessage}
                                    messageInfo={state.Dialogs.messageData}
                                    messageUpdate={onUpdateMessage}
                                    messageAdd={onAddMessage}/>);
                }
            }
        </StoreContext.Consumer>);
}
export default DialogContainer;