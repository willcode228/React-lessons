import { useState } from "react";
import axios from "axios";

const UserStatus = (props) => {

    const [status, setStatus] = useState('No status');

    const handleChangeStatus = () => {
        let statusText = prompt('Set new status',status).trim();
        if(statusText === status) return;

        axios
            .put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status: statusText})
            .then(response => {
                console.log(response) 
            });

    }

    return (
        <h1 onDoubleClick={handleChangeStatus} style={{userSelect: 'none'}}>{status}</h1>
    )
}

export default UserStatus;