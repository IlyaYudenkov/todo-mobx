import { InputText } from '@/shared/UI/Input'
import cl from './_FormUpdateTask.module.scss'
import { Button } from '@/shared/UI/Button'
import { EInputTextVariants } from '@/shared/UI/Input/ui/Text/model/inputText.model'
import { taskStore } from '@/app/store/task.store'
import { FormEvent, useRef } from 'react'
import { getFormDataFromForm } from '@/shared/lib/formData.lib'
import { EButtonType } from '@/shared/UI/Button/model/button.model'
import { ITaskItem } from '@/entities/Task/model/task.model'
import { observer } from 'mobx-react-lite'

interface IFormUpdateTask {
    selectedTask: ITaskItem
}

export const FormUpdateTask = observer(({
    selectedTask
}: IFormUpdateTask) => {

    //REF
    const formRef = useRef<HTMLFormElement>(null)

    //HANDLE
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;
        const { title, description } = getFormDataFromForm(formRef.current)
        taskStore.updateTask({
            ...selectedTask,
            title,
            description
        })
    }    

    return (
        <form className={cl.FormUpdateTask} onSubmit={handleOnSubmit} ref={formRef}>
            <label id='title'>
                Title
            </label>
            <InputText
                id='title'
                name='title'
                placeholder='Введите название задачи'
                defaultValue={selectedTask.title} />
            <label id='description'>
                Description
            </label>
            <InputText
                id='description'
                name='description'
                placeholder='Введите описание задачи'
                variant={EInputTextVariants.TEXTAREA}
                defaultValue={selectedTask.description}
            />
            <Button
                type={EButtonType.SUBMIT}
                className={cl.updateButton}
                title='Обновить задачу' />
        </form>
    )
})