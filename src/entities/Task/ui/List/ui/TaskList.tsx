import { cls } from "@/shared/lib/classes.lib"
import cl from './_TaskList.module.scss'
import { TaskItem } from "../../Item/ui/TaskItem"
import { ITaskItem } from "@/entities/Task/model/task.model"
import { Button } from "@/shared/UI/Button"
import { taskStore } from "@/app/store/task.store"
import { observer } from "mobx-react-lite"

interface ITaskList {
    className?: string,
    items: ITaskItem[]
}

export const TaskList = observer(({
    className,
    items
}: ITaskList) => {

    //MOBX
    const isFiltered = taskStore.isFiltered

    return (
        <section className={cls(cl.TaskList, className)}>
            {items.map(it => (
                <TaskItem
                    key={it.id}
                    id={it.id}
                    description={it.description}
                    title={it.title}
                    className={cl.className}
                    done={it.done}
                />
            ))}
            {items.length < 1 && <p className={cl.notFound}>Задач по такому запросу не найдено</p>}
            {isFiltered && <Button className={cl.defaultButton} onClick={() => taskStore.resetTheFilters()}>
                Сбросить фильтры
            </Button>}
        </section>
    )
})