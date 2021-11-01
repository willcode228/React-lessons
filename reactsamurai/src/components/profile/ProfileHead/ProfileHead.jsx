import React from 'react';
import s from './ProfileHead.module.css';

class ProfileHead extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        console.log('render');
        return (
            <div className={s.profile__img}>
                <img src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="" />
            </div>
        )
    }
}

export default ProfileHead;