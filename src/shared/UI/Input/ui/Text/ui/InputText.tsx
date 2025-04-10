import { cls } from '@/shared/lib/classes.lib'
import { IInput } from '../../../model/input.model'
import { EInputTextTypes, EInputTextVariants } from '../model/inputText.model'
import cl from './_InputText.module.scss'

interface IInputText extends IInput {
    defaultValue?: string,
    value?: string
    type?: EInputTextTypes
    variant?: EInputTextVariants
    id?: string
    rows?: number
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const InputText = ({
    className,
    id,
    name,
    defaultValue,
    value,
    type = EInputTextTypes.TEXT,
    variant = EInputTextVariants.INPUT,
    placeholder,
    onChange,
    rows = 10,
}: IInputText) => {
    
    const commonProps = {
        id,
        name,
        className: cls(variant === EInputTextVariants.INPUT ? cl.input : cl.textarea, className),
        defaultValue,
        value,
        placeholder,
        onChange,
    };
    return (
        <>
            {variant === EInputTextVariants.INPUT ? <input
                {...commonProps}
                type={type}
            /> : <textarea {...commonProps}
                rows={rows} />}
        </>

    )
}