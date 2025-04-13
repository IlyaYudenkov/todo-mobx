import { FormEvent, useRef } from 'react'
import cl from './_DefaultForm.module.scss'
import { InputText } from '@/shared/UI/Input'
import { Button } from '@/shared/UI/Button'
import { EButtonType, EButtonVariant } from '@/shared/UI/Button/model/button.model'
import { cls } from '@/shared/lib/classes.lib'
import { IDefaultForm } from '../model/defaultForm.model'
import { getFormDataFromForm } from '@/shared/lib/formData.lib'

export const DefaultForm = ({
    buttonIcon,
    inputName,
    inputPlaceholder,
    onSubmit,
    className,
    classNameInput,
    classNameButton
}: IDefaultForm) => {

    //REF
    const formRef = useRef<HTMLFormElement>(null)

    //HANDLE
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!formRef.current) return;

        const data = getFormDataFromForm(formRef.current);

        if (onSubmit) {
            onSubmit(data[inputName])
        }
        if (inputName === 'titleTask') formRef.current.reset()
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
                variant={EButtonVariant.ANGULAR}
                className={classNameButton}
                afterImage={buttonIcon}
            />
        </form>
    )
}