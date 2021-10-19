
const UserStatus = ({status, updateStatus}) => {

    const handleChangeStatus = () => {
        let statusText = prompt('Set new status', status).trim();
        if(statusText === status) return;
        updateStatus(statusText);
    }

    return (
        <h1 onDoubleClick={handleChangeStatus} style={{userSelect: 'none'}}>{status}</h1>
    )
}

export default UserStatus;