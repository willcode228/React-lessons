import Loading from '../../Loading/Loading';
import s from './User.module.css'

const User = (props) => {

    if(!props.profile) {
        return <Loading isFetching={true}/>;
    }  

    return (
        <div className={s.profile__user}>
            <div className={s.profile__ava}>
                {
                    props.profile.photos.small 
                    ? <img src={props.profile.photos.large} alt="ava" />
                    : <h2 className={s.noImg}>{props.profile.fullName.slice(0, 2)}</h2>
                }
            </div>
            <div className="profile__meta">
                <h3 className="profile__meta-name">{props.profile.fullName}</h3>
                <p className="profile__meta-about">{props.profile.aboutMe}</p>

                {
                    props.profile.lookingForAJob 
                        ? (
                            <>
                                <p className="profile__meta-place">I'm looking for a job now</p>
                                <p className="profile__meta-place">{props.profile.lookingForAJobDescription}</p>
                            </>
                        )
                        : <p>I'm not looking for a job now</p>

                }
                <div className="profile__meta-contacts">
                    {
                        props.profile.contacts.facebook ? <p>Facebook: {props.profile.contacts.facebook}</p> : null
                    }
                    {
                        props.profile.contacts.vk ? <p>Vk: {props.profile.contacts.vk}</p> : null
                    }
                    {
                        props.profile.contacts.twitter ? <p>Twitter: {props.profile.contacts.twitter}</p> : null
                    }
                    {
                        props.profile.contacts.instagram ? <p>Instagram: {props.profile.contacts.instagram}</p> : null
                    }
                    {
                        props.profile.contacts.github ? <p>Github: {props.profile.contacts.github}</p> : null
                    }
                </div>
            </div>
        </div>
    );
}

export default User;