import { EInputTextTypes, EInputTextVariants } from '../model/inputText.model'
import cl from './_InputText.module.scss'

interface IInputText {
    name?: string,
    defaultValue?: string,
    type?: EInputTextTypes
    variant?: EInputTextVariants
    placeholder?: string,

    rows?: number
}

export const InputText = ({
    name,
    defaultValue,
    type = EInputTextTypes.TEXT,
    variant = EInputTextVariants.INPUT,
    placeholder,

    rows = 10,
}: IInputText) => {
    return (
        <>
            {variant === EInputTextVariants.INPUT ? <input
                name={name}
                className={cl.input}
                defaultValue={defaultValue}
                type={type}
                placeholder={placeholder}
            /> : <textarea name={name}
                rows={rows}
                className={cl.textarea}
                defaultValue={defaultValue}
                placeholder={placeholder} />}
        </>

    )
}