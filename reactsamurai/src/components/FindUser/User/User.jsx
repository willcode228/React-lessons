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
                {
                    props.data.photos.small 
                    ? <img src={props.data.photos.small} alt="" />
                    : <div className={s.noImg}>{props.data.name.slice(0, 2)}</div>   
                }
                <button onClick={eventBtn} className="user__follow">{followBtnText}</button>
            </div>
            <div className={s.user__text}>
                <div className={s.user__wrapper}>
                    <h2 className={s.user__name}>{props.data.name}</h2>
                    <p className={s.user__note}>{props.data.status || 'Нет статуса'}</p>
                </div>
                <div className={s.user__place}>
                    <h2 className={s.user__country}>Ukraine</h2>
                    <h3 className={s.user__city}>Kirovograd</h3>
                </div>
            </div>
        </div>
    );
}

export default User;