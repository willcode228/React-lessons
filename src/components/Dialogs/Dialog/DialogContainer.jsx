import { connect } from 'react-redux';
import { addDialogMessageActionCreator, updateDialogMessageActionCreator } from '../../../Redux/dialogs-reducer';
import Dialog from './Dialog';

const mapStateToProps = (state) => {
    return {
        messageInfo: state.Dialogs.messageData,
        messageText: state.Dialogs.textMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        messageUpdate: (text) => { dispatch(updateDialogMessageActionCreator(text)) },
        messageAdd: () => { dispatch(addDialogMessageActionCreator()) }
    }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);
export default DialogContainer;