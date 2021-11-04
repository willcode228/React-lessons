const Contact = ({ title, contact, userId }) => {

    if (!userId) {
        return (
            <p>
                <b>{title}</b>
                <a href={contact}>{contact}</a>
            </p>
        )
    }

    return (
        <>
        {
            contact 
                ? <p><b>{title}</b><a href={contact}>{contact}</a></p>
                : null
        }
        </>
    );
}

export default Contact;