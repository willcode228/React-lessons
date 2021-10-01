import Dialogs from "./Dialogs";
import { addMessageActionCreator, changeMessageTexActionCreator} from './../../redux/DialogsReducer'
const DialogsContainer = (props) => {
    let state = props.store.getState();

    const addMessage = () => {
        let action = addMessageActionCreator();
        props.store.dispatch(action);
    }

    const changeAreaText = (text) => {
        let action = changeMessageTexActionCreator(text);
        props.store.dispatch(action);
    }

    return (<Dialogs dialogs={state.dialogs.dialogs}
                    messages={state.dialogs.messages}
                    text={state.dialogs.textarea}
                    addMessage={ addMessage }
                    changeAreaText={ changeAreaText }/>)
}

export default DialogsContainer;
