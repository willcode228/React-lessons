import Dialogs from "./Dialogs";
import { addMessageActionCreator, changeMessageTexActionCreator} from './../../redux/DialogsReducer';
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.dialogs,
        messages: state.dialogs.messages,
        text: state.dialogs.textarea
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        changeAreaText: (text) => {
            let action = changeMessageTexActionCreator(text);
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
