import s from './Loading.module.css';

const Loading = (props) => {
    console.log(props.isFetching);
    if(!props.isFetching) {
        return null;
    }

    return (
        <div className={s.loading}>
            <div className={s.loading__circle}></div>
        </div>
    );
}

export default Loading;
