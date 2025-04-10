import { FormEvent, useRef } from 'react'
import cl from './_DefaultForm.module.scss'
import { InputText } from '@/shared/UI/Input'
import { Button } from '@/shared/UI/Button'
import { EButtonType } from '@/shared/UI/Button/model/button.model'
import { cls } from '@/shared/lib/classes.lib'
import { IDefaultForm } from '../model/defaultForm.model'

export const DefaultForm = ({
    buttonIcon,
    inputName,
    inputPlaceholder,
    className,
    classNameInput,
    classNameButton
}: IDefaultForm) => {

    //REF
    const formRef = useRef<HTMLFormElement>(null)

    //HANDLE
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    }

    return (
        <form className={cls(cl.DefaultForm, className)} ref={formRef} onSubmit={handleSubmit}>
            <InputText
                name={inputName}
                className={cls(cl.input, classNameInput)}
                placeholder={inputPlaceholder}
            />
            <Button
                type={EButtonType.SUBMIT}
                className={cls(cl.button, classNameButton)}
                afterImage={buttonIcon}
                afterProps={{ width: 20, height: 20 }}
            />
        </form>
    )
}