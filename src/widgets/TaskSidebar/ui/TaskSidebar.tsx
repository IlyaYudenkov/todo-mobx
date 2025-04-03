import { InputText } from '@/shared/UI/Input'
import cl from './_TaskSidebar.module.scss'
import { EInputTextVariants } from '@/shared/UI/Input/ui/Text/model/inputText.model'
import { useState } from 'react'
import { cls } from '@/shared/lib/classes.lib'


interface ITaskSidebar{
    className?: string
}


export const TaskSidebar = ({
    className
}: ITaskSidebar) => {

    //STATE
    const [isOpen, setIsOpen] = useState<boolean>(false)


    return (
        <aside className={cls(cl.TaskSidebar, isOpen ? cl.visible : '', className)}>
            <h3>TaskName:</h3>
            <InputText placeholder='Введите название задачи'/>
            <InputText placeholder='Введите описание задачи' variant={EInputTextVariants.TEXTAREA}/>
        </aside>
    )
}