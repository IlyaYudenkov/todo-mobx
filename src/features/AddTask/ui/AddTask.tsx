import { InputText } from '@/shared/UI/Input'
import cl from './_AddTask.module.scss'
import { Button } from '@/shared/UI/Button'
import { PLUS_ICON } from '@/shared/data/icon/plus.icon'
import { EButtonType } from '@/shared/UI/Button/model/button.model'
import { getFormData } from '@/shared/lib/formData.lib'
import { FormEvent, useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { taskStore } from '@/app/store/task.store'


export const AddTask = observer(() => {

    //REF
    const formRef = useRef<HTMLFormElement>(null)

    //HANDLE
    const addTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!formRef.current) return;
        const { titleTask } = getFormData(new FormData(formRef.current))

        if (!titleTask) return;
        taskStore.addTask({ title: titleTask })
    }

    return (
        <form className={cl.AddTask} ref={formRef} onSubmit={addTask}>
            <InputText
                name='titleTask'
                className={cl.inputTask}
                placeholder="Введите задачу"
            />
            <Button
                type={EButtonType.SUBMIT}
                className={cl.addButtonTask}
                afterImage={PLUS_ICON}
                afterProps={{ width: 20, height: 20 }}
            />
        </form>
    )
})