import s from './User.module.css';

const User = (props) => {
    
    const unfollow = () => {
        props.unfollow(props.data.id);
    }
    
    const follow = () => {
        props.follow(props.data.id);
    }
    
    let followBtnText = props.data.followed ? 'Unfollow' : 'Follow';
    let eventBtn = props.data.followed ? unfollow : follow;

    return (
        <div className={s.user}>
            <div className={s.user__meta}>
                <img src={props.data.photoUrl} alt="" />
                <button onClick={eventBtn} className="user__follow">{followBtnText}</button>
            </div>
            <div className={s.user__text}>
                <div className={s.user__wrapper}>
                    <h2 className={s.user__name}>{props.data.fullName}</h2>
                    <p className={s.user__note}>{props.data.note}</p>
                </div>
                <div className={s.user__place}>
                    <h2 className={s.user__country}>{props.data.location.country}</h2>
                    <h3 className={s.user__city}>{props.data.location.city}</h3>
                </div>
            </div>
        </div>
    );
}

export default User;