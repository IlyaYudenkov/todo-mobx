import { cls } from '@/shared/lib/classes.lib'
import { IInput } from '../../../model/input.model'
import { EInputTextTypes, EInputTextVariants } from '../model/inputText.model'
import cl from './_InputText.module.scss'

interface IInputText extends IInput {
    defaultValue?: string,
    type?: EInputTextTypes
    variant?: EInputTextVariants
    id?: string
    rows?: number
}

export const InputText = ({
    className,
    id,
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
                id={id}
                name={name}
                className={cls(cl.input, className)}
                defaultValue={defaultValue}
                type={type}
                placeholder={placeholder}
            /> : <textarea id={id}
                name={name}
                rows={rows}
                className={cls(cl.textarea, className)}
                defaultValue={defaultValue}
                placeholder={placeholder} />}
        </>

    )
}