import { Search } from '@/features/Search'
import cl from './_TaskHomeSection.module.scss'
import { AddTask } from '@/features/AddTask'
import { TaskFilter } from '@/features/TaskFilter'
import { TaskList } from '@/entities/Task'
import { taskStore } from '@/app/store/task.store'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { Loader } from '@/shared/UI/Loader'
import { useEffect, useState } from 'react'
import { ITaskItem } from '@/entities/Task/model/task.model'


export const TaskHomeSection = observer(() => {

    //STATE
    const [tasksArray, setTasksArray] = useState<ITaskItem[]>([])

    //MOBX
    const {tasks, searchTitle, isLoading, isFiltered, filteredTasksByDone, filteredTasksBySearch } = taskStore;     
    console.log(isFiltered);
     

    //EFFECT
    useEffect(() => {
        if(!isFiltered) setTasksArray(toJS(tasks))
        else setTasksArray(toJS(filteredTasksByDone ?? filteredTasksBySearch))
    }, [isFiltered, tasks, filteredTasksByDone, filteredTasksBySearch])

    

    if(isLoading) return <Loader/>
    return (
        <main className={cl.TaskHomeSection}>
            <div className={cl.topContainer}>
                <Search/>
                <AddTask/>
            </div>
            <div className={cl.middleContainer}>
                <TaskFilter/>
            </div>
            <TaskList items={tasksArray}/>
        </main>
    )
})