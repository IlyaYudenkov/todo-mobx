import { InputCheckbox } from '@/shared/UI/Input'
import cl from './_TaskSidebar.module.scss'
import { useEffect, useState } from 'react'
import { cls } from '@/shared/lib/classes.lib'
import { taskStore } from '@/app/store/task.store'
import { observer } from 'mobx-react-lite'
import { FormUpdateTask } from '@/features/Form/UpdateTask'

export const TaskSidebar = observer(() => {

    //STATE
    const [isOpen, setIsOpen] = useState<boolean>(false)

    //MOBX
    const selectedTask = taskStore.selectedTask;

    //EFFECT
    useEffect(() => {
        setIsOpen(!!selectedTask.id)
    }, [selectedTask])

    //HANDLE
    const handleOnChecked = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        e.stopPropagation()
        if (selectedTask.id) taskStore.toggleTheTask(selectedTask.id, checked)
    }

    console.log(selectedTask.description);
    

    return (
        <aside className={cls(cl.TaskSidebar, isOpen ? cl.visible : '')}>
            <div className={cl.topContainer}>
                <InputCheckbox
                    onClick={(e) => e.stopPropagation()}
                    checked={selectedTask.done}
                    onChange={handleOnChecked} />
                <h3 className={cls(cl.sidebarTitle, selectedTask.done ? cl.done : '')}>TaskName: {selectedTask.title}</h3>
            </div>
            <FormUpdateTask selectedTask={selectedTask}/>
        </aside>
    )
})