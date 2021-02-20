import style from './Friend.module.css';

function Friend(props) {
    return (<div className={style.box}>
                <h3 className={style.title}>{props.name}</h3>
            </div>);
}

export default Friend;