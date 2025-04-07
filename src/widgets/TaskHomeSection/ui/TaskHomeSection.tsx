import { Search } from '@/features/Search'
import cl from './_TaskHomeSection.module.scss'
import { AddTask } from '@/features/AddTask'
import { TaskFilter } from '@/features/TaskFilter'
import { TaskList } from '@/entities/Task'
import { useState } from 'react'
import { ITaskItem } from '@/entities/Task/model/task.model'


export const TaskHomeSection = () => {

    //STATE
    const [tasks, setTasks] = useState<ITaskItem[]>([])


    return (
        <main className={cl.TaskHomeSection}>
            <div className={cl.topContainer}>
                <Search/>
                <AddTask/>
            </div>
            <div className={cl.middleContainer}>
                <TaskFilter/>
            </div>
            <TaskList items={[
                {id: 1, title: 'dsadasdasd'}
            ]}/>
        </main>
    )
}