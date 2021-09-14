import s from './User.module.css'

const User = () => {
    return (
        <div className={s.profile__user}>
            <div className={s.profile__ava}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiT-yyLmJNm-LFIkIuz04Wd-sOUYRrpt-bQ&usqp=CAU" alt="" />
            </div>
            <div className="profile__meta">
                <h3 className="profile__meta-name">Dmitry K.</h3>
                <p className="profile__meta-birth">Date of Birth: 66.66.66</p>
                <p className="profile__meta-place">City: Odessa</p>
                <p className="profile__meta-education">Education: Politech</p>
                <p className="profile__meta-site">WebSite: https://github.com/willcode228</p>
            </div>
        </div>
    );
}

export default User;