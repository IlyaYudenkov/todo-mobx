import { Search } from '@/features/Search'
import cl from './_TaskHomeSection.module.scss'
import { AddTask } from '@/features/AddTask'
import { TaskFilter } from '@/features/TaskFilter'


export const TaskHomeSection = () => {
    return (
        <main className={cl.TaskHomeSection}>
            <div className={cl.topContainer}>
                <Search/>
                <AddTask/>
            </div>
            <div className={cl.middleContainer}>
                <TaskFilter/>
            </div>
        </main>
    )
}