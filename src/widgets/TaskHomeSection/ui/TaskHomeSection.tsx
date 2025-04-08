import { Search } from '@/features/Search'
import cl from './_TaskHomeSection.module.scss'
import { AddTask } from '@/features/AddTask'
import { TaskFilter } from '@/features/TaskFilter'
import { TaskList } from '@/entities/Task'
import { taskStore } from '@/app/store/task.store'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import { Loader } from '@/shared/UI/Loader'


export const TaskHomeSection = observer(() => {

    //MOBX
    const {tasks, isLoading} = taskStore;    

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
            <TaskList items={toJS(tasks)}/>
        </main>
    )
})