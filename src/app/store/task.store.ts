import { TaskApi } from "@/entities/Task/api/task.api";
import { ITaskItem } from "@/entities/Task/model/task.model";
import { makeAutoObservable } from "mobx";

class TaskStore {
    tasks: ITaskItem[] = []
    isLoading: boolean = false
    isFiltered: boolean = false

    constructor() {
        makeAutoObservable(this)
        this.getAll();
    }

    getAll() {
        this.isLoading = true;
        this.tasks = TaskApi.getAllTasks();
        this.isLoading = false;
    }

    addTask({ title, description, done }: ITaskItem) {
        const newTask = {
            id: Date.now(),
            title,
            description,
            done
        }
        this.tasks = TaskApi.addNewTask(newTask)
    }

    deleteTask(id: Partial<ITaskItem>){
        this.tasks = TaskApi.deleteTask(id)
    }

    searchTaskByTitle({title}: Partial<ITaskItem>){
        this.tasks = this.tasks.filter(task => task.title.toLowerCase().includes((title as string).toLowerCase()))
        this.isFiltered = true        
    }

    resetTheFilters(){
        this.isLoading = true;
        this.tasks = TaskApi.getAllTasks();
        this.isLoading = false;
        this.isFiltered = false        

    }
}
export const taskStore = new TaskStore();
export type TTaskStore = typeof taskStore;