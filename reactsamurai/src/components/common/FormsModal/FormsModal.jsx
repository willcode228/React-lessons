import s from './FormsModal.module.css';

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={`${s.formControl} ${meta.touched && meta.error ? s.error : '' }`}>
            <textarea {...input} {...props}/>
            {
                meta.touched &&  meta.error 
                ? <span>{meta.error}</span> : ''
            }
            
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <div className={`${s.formControl} ${meta.touched && meta.error ? s.error : '' }`}>
            <input {...input} {...props}/>
            {
                meta.touched &&  meta.error 
                ? <span>{meta.error}</span> : ''
            }
            
        </div>
    )
}
