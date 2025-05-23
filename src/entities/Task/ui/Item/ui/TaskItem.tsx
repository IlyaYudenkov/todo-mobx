import { cls } from "@/shared/lib/classes.lib"
import cl from './_TaskItem.module.scss'
import { InputCheckbox } from "@/shared/UI/Input"
import { Button } from "@/shared/UI/Button"
import { TRASH_ICON } from "@/shared/data/icon/trash.icon"
import { useEffect, useState } from "react"
import { ITaskItem } from "@/entities/Task/model/task.model"
import { taskStore } from "@/app/store/task.store"
import { observer } from "mobx-react-lite"
import { EButtonVariant } from "@/shared/UI/Button/model/button.model"

export const TaskItem = observer(({
    className,
    title,
    id,
    description,
    done
}: ITaskItem) => {
    //STATE
    const [completed, setIsCompleted] = useState<boolean>(done);

    //EFFECT
    useEffect(() => {
        setIsCompleted(done)
    }, [done])

    //HANDLE
    const deleteTheTask = (id: number) => taskStore.deleteTask(id);

    const handleOnChecked = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        e.stopPropagation()
        taskStore.toggleTheTask(id, checked)
    }

    const handleSelect = (task: ITaskItem) => taskStore.setSelectedTask(task);

    return (
        <div className={cls(
            cl.TaskItem,
            completed ? cl.completedTask : '',
            className)}
            onClick={() => handleSelect({ id, done, title, description })}>
            <div className={cl.leftContainer}>
                <InputCheckbox
                    onClick={(e) => e.stopPropagation()}
                    checked={completed}
                    onChange={handleOnChecked} />
                <h5 className={cl.title}>{title}</h5>
            </div>
            <Button
                variant={EButtonVariant.NEGATIVE}
                afterImage={TRASH_ICON}
                onClick={() => deleteTheTask(id)}
            />
        </div>
    )
})