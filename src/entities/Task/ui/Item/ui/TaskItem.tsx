import { cls } from "@/shared/lib/classes.lib"
import cl from './_TaskItem.module.scss'
import { InputCheckbox } from "@/shared/UI/Input"
import { Button } from "@/shared/UI/Button"
import { TRASH_ICON } from "@/shared/data/icon/trash.icon"
import { useEffect, useState } from "react"
import { ITaskItem } from "@/entities/Task/model/task.model"
import { taskStore } from "@/app/store/task.store"

export const TaskItem = ({
    className,
    title,
    id,
    done
}: ITaskItem) => {
    //STATE
    const [completed, setIsCompleted] = useState<boolean>(false);

    //EFFECT
    useEffect(() => {
        if (done) setIsCompleted(done)
    }, [done])

    //HANDLE
    const deleteTheTask = (id: number) => taskStore.deleteTask(id);

    const handleOnChecked = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        e.stopPropagation()
        taskStore.toggleTheTask(id, checked)
    }

    return (
        <div className={cls(cl.TaskItem, completed ? cl.completedTask : '', className)}>
            <div className={cl.leftContainer}>
                <InputCheckbox
                    onClick={(e) => e.stopPropagation()}
                    checked={completed}
                    onChange={handleOnChecked} />
                <h5 className={cl.title}>{title}</h5>
            </div>
            <Button
                className={cl.trashButton}
                afterImage={TRASH_ICON}
                afterProps={{ width: 20, height: 20 }}
                onClick={() => deleteTheTask(id)}
            />
        </div>
    )
}