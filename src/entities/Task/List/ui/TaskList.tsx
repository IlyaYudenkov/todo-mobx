import { cls } from "@/shared/lib/classes.lib"
import cl from './_TaskList.module.scss'
import { ITaskItem } from "../../model/task.model"
import { TaskItem } from "../../Item/ui/TaskItem"

interface ITaskList {
    className?: string,
    items: ITaskItem[]
}

export const TaskList = ({
    className,
    items
}: ITaskList) => {
    return (
        <div className={cls(cl.TaskList, className)}>
            {items.map(it => (
                <TaskItem key={it.id} id={it.id} title={it.title} className={cl.className} />
            ))}
        </div>
    )
}
