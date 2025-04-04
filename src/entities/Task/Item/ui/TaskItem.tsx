import { cls } from "@/shared/lib/classes.lib"
import cl from './_TaskItem.module.scss'
import { Checkbox } from "@/shared/UI/Input"
import { Button } from "@/shared/UI/Button"
import { TRASH_ICON } from "@/shared/data/icon/trash.icon"
import { ITaskItem } from "../../model/task.model"
import { useState } from "react"

export const TaskItem = ({
    className,
    title,
    id
}: ITaskItem) => {

    //STATE
    const [completed, setIsCompleted] = useState<boolean>(false);

    return (
        <div className={cls(cl.TaskItem, completed ? cl.completedTask : '', className)}>
            <div className={cl.leftContainer}>
                <Checkbox checked={completed} onChange={(_, checked) => setIsCompleted(checked)}/>
                <h5 className={cl.title}>{title}</h5>
            </div>
            <Button className={cl.trashButton} afterImage={TRASH_ICON} afterProps={{ width: 20, height: 20 }} />
        </div>
    )
}