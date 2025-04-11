import cl from './_TaskHomeSection.module.scss'
import { TaskFilter } from '@/features/TaskFilter'
import { TaskList } from '@/entities/Task'
import { taskStore } from '@/app/store/task.store'
import { observer } from 'mobx-react-lite'
import { Loader } from '@/shared/UI/Loader'
import { useEffect, useState } from 'react'
import { ITaskItem } from '@/entities/Task/model/task.model'
import { PLUS_ICON } from '@/shared/data/icon/plus.icon'
import { MAGNIFIER_ICON } from '@/shared/data/icon/magnifier.icon'
import { DefaultForm } from '@/features/Form/Default'

export const TaskHomeSection = observer(() => {

    //STATE
    const [tasksArray, setTasksArray] = useState<ITaskItem[]>([])

    //MOBX
    const { tasks, isLoading, isFiltered, filteredTasks } = taskStore;

    //EFFECT
    useEffect(() => {
        if (!isFiltered) setTasksArray(tasks)
        else setTasksArray(filteredTasks)
    }, [filteredTasks, tasks, isFiltered])

    if (isLoading) return <Loader />
    return (
        <main className={cl.TaskHomeSection}>
            <div className={cl.addTaskContainer}>
                <DefaultForm inputName='titleTask'
                    inputPlaceholder='Введите название задачи'
                    buttonIcon={PLUS_ICON}
                    onSubmit={(titleTask: string) => {
                        if (titleTask) {
                            taskStore.addTask(titleTask);
                        }
                    }} />
            </div>
            <div className={cl.filtersContainer}>
                <DefaultForm inputName='searchTitle'
                    inputPlaceholder='Поиск по названию задачи'
                    buttonIcon={MAGNIFIER_ICON}
                    onSubmit={(searchTitle: string) => {
                        if (searchTitle) {
                            taskStore.updateSearchTitle(searchTitle);
                        }
                    }} />
                <TaskFilter />

            </div>
            <TaskList items={tasksArray} />
        </main>
    )
})