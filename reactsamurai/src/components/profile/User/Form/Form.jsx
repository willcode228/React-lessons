const UserDataForm = ({cancel}) => {
    return (
        <>
            <button type="submit">Submit</button>
            <button onClick={cancel}>Cancel</button>
        </>
    );
}

export default UserDataForm;