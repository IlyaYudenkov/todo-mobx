import { ITaskItem } from "../model/task.model";

//Ключ для localStorage (LS)
const TASKS_LS_KEY = 'tasks'

const DEFAULT_TASKS_ARRAY: ITaskItem[] = [
    { id: 1, title: 'Прочитать документацию по Next js 17', description: '', done: false },
    { id: 2, title: 'Внедрить MobX в реакт приложение', description: '', done: true }
]

export const TaskApi = {
    //Получение всех задач из LS
    getAllTasks: (): ITaskItem[] => {
        const tasks = localStorage.getItem(TASKS_LS_KEY)

        if (!tasks) {
            localStorage.setItem(TASKS_LS_KEY, JSON.stringify(DEFAULT_TASKS_ARRAY))
            return DEFAULT_TASKS_ARRAY
        }
        return JSON.parse(tasks);
    },
    //Добавить новую задачу
    addNewTask: (task: ITaskItem): ITaskItem[] => {
        const tasks = TaskApi.getAllTasks()
        const updatedTasksArray = [...tasks, task]
        localStorage.setItem(TASKS_LS_KEY, JSON.stringify(updatedTasksArray))
        return updatedTasksArray;
    },
    //Изменить задачу
    updateTask: (id: number, updatedTask: Partial<ITaskItem>): ITaskItem[] => {
        const updatedTasksArray = TaskApi.getAllTasks().map(task =>
            task.id === id ? { ...task, ...updatedTask } : task
        )        
        localStorage.setItem(TASKS_LS_KEY, JSON.stringify(updatedTasksArray))
        return updatedTasksArray;
    },
    //Удалить задачу
    deleteTask: (id: number): ITaskItem[] => {
        const updatedTasksArray = TaskApi.getAllTasks().filter(task => task.id !== id)
        localStorage.setItem(TASKS_LS_KEY, JSON.stringify(updatedTasksArray))
        return updatedTasksArray;
    }
}