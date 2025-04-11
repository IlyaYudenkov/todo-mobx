import { InputCheckbox } from '@/shared/UI/Input'
import cl from './_TaskSidebar.module.scss'
import { useEffect, useState } from 'react'
import { cls } from '@/shared/lib/classes.lib'
import { taskStore } from '@/app/store/task.store'
import { observer } from 'mobx-react-lite'
import { UpdateTask } from '@/features/UpdateTask'
import { Button } from '@/shared/UI/Button'
import { XMARK_ICON } from '@/shared/data/icon/xMark.icon'
import { EButtonVariant } from '@/shared/UI/Button/model/button.model'
import { ITaskItem } from '@/entities/Task/model/task.model'
import { Loader } from '@/shared/UI/Loader'

export const TaskSidebar = observer(() => {

    //STATE
    const [isOpen, setIsOpen] = useState<boolean>(false)

    //MOBX
    const {selectedTask, isLoading} = taskStore;

    //EFFECT
    useEffect(() => {
        setIsOpen(!!selectedTask.id)
    }, [selectedTask.id])

    //HANDLE
    const handleOnChecked = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        e.stopPropagation()
        if (selectedTask.id) taskStore.toggleTheTask(selectedTask.id, checked)
    }

    const closeSidebar = () => {
        setIsOpen(false)
        taskStore.setSelectedTask({} as ITaskItem)
    }

    if(isLoading) return <Loader/>

    return (
        <aside className={cls(cl.TaskSidebar, isOpen ? cl.visible : '')}>
            <div className={cl.topContainer}>
                <InputCheckbox
                    checked={selectedTask.done}
                    onChange={handleOnChecked} />
                <h3 className={cls(cl.sidebarTitle, selectedTask.done ? cl.done : '')}>
                    TaskName: {selectedTask.title}
                </h3>
                <Button
                    className={cl.button}
                    variant={EButtonVariant.NEGATIVE}
                    afterImage={XMARK_ICON}
                    onClick={closeSidebar}
                />
            </div>
            <UpdateTask selectedTask={selectedTask} />
        </aside>
    )
})