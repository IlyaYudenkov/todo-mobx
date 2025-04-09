import { Search } from '@/features/Search'
import cl from './_TaskHomeSection.module.scss'
import { AddTask } from '@/features/AddTask'
import { TaskFilter } from '@/features/TaskFilter'
import { TaskList } from '@/entities/Task'
import { taskStore } from '@/app/store/task.store'
import { observer } from 'mobx-react-lite'
import { Loader } from '@/shared/UI/Loader'
import { useEffect, useState } from 'react'
import { ITaskItem } from '@/entities/Task/model/task.model'


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
            <div className={cl.topContainer}>
                <Search />
                <AddTask />
            </div>
            <div className={cl.middleContainer}>
                <TaskFilter />
            </div>
            <TaskList items={tasksArray} />
        </main>
    )
})