import React from 'react';
import s from './FormsModal.module.css';


export const Textarea = ({ input, meta, ...props }) => {
    return (
        <div className={`${s.formControl} ${meta.touched && meta.error ? s.error : ''}`}>
            <textarea {...input} {...props} />
            {
                meta.touched && meta.error
                    ? <span>{meta.error}</span> : ''
            }

        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    return (
        <div className={`${s.formControl} ${meta.touched && meta.error ? s.error : ''}`}>
            <input {...input} {...props} />
            {
                meta.touched && meta.error
                    ? <span>{meta.error}</span> : ''
            }

        </div>
    )
}

export class FieldFileInput extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        const { input: { onChange } } = this.props
        onChange(e.target.files[0])
    }

    render() {
        const { input: { value } } = this.props
        const { input, label, required, meta, } = this.props;

        return (
            <div><label>{label}</label>
                <div>
                    <input
                        type='file'
                        accept='.jpg, .png, .jpeg'
                        onChange={this.onChange}
                    />
                </div>
            </div>
        )
    }
}
