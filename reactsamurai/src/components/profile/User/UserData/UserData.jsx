import Contact from '../Contact/Contact';

let UserData = ({profile, userId}) => {
    return (
        <div className="profile__meta">
            <h3 className="profile__meta-name">{profile.fullName}</h3>
            <p className="profile__meta-about">{profile.aboutMe}</p>

            {
                profile.lookingForAJob
                    ? (
                        <>
                            <p className="profile__meta-place">I'm looking for a job now</p>
                            <p className="profile__meta-place">{profile.lookingForAJobDescription}</p>
                        </>
                    )
                    : <p>I'm not looking for a job now</p>

            }

            {
                profile.aboutMe ? <p>About me {profile.aboutMe}</p> : null
            }

            <div className="profile__meta-contacts">
                {
                    Object.keys(profile.contacts).map(key => (
                        <Contact title={key} contact={profile.contacts[key]}
                            key={key} userId={userId} />
                    ))
                }
            </div>
        </div>
    )
}

export default UserData;