import { TaskApi } from "@/entities/Task/api/task.api";
import { ITaskItem } from "@/entities/Task/model/task.model";
import { ETaskFilter } from "@/features/TaskFilter/model/taskFilter.model";
import { makeAutoObservable } from "mobx";

class TaskStore {
    tasks: ITaskItem[] = []
    isLoading: boolean = false
    filter: ETaskFilter = ETaskFilter.ALL
    searchTitle: string = '';

    constructor() {
        makeAutoObservable(this)
        this.getAll();
    }

    getAll() {
        this.isLoading = true;
        this.tasks = TaskApi.getAllTasks();
        this.isLoading = false;
    }

    addTask(title: string, description?: string) {
        const newTask = {
            id: Date.now(),
            title,
            description,
            done: false
        }
        this.tasks = TaskApi.addNewTask(newTask)
    }

    deleteTask(id: number) {
        this.tasks = TaskApi.deleteTask(id)
    }

    updateTask(task: ITaskItem) {
        this.tasks = TaskApi.updateTask(task.id, task);
    }

    updateSearchTitle(title: string) {
        this.searchTitle = title;
    }

    getTask(id: number) {
        return this.tasks.find(task => task.id === id)
    }

    toggleTheTask(id: number, completed?: boolean) {
        const isDone = completed ?? this.getTask(id)?.done
        this.tasks = TaskApi.updateTask(id, {
            done: isDone
        })
    }

    get isFiltered() {
        return this.searchTitle !== '' || this.filter !== ETaskFilter.ALL;
    }

    //FILTERS
    get filteredTasks() {
        let result: ITaskItem[] = this.tasks;

        if (this.searchTitle.trim()) {
            result = result.filter(task =>
                task.title.toLowerCase().includes((this.searchTitle as string).toLowerCase()))
        }

        if (this.filter === ETaskFilter.COMPLETED) {
            result = result.filter(task => task.done)
        } else if (this.filter === ETaskFilter.UNCOMPLETED) {
            result = result.filter(task => !task.done)
        }

        return result;
    }

    setFilterByDone(filter: ETaskFilter) {
        this.filter = filter;
    }


    resetTheFilters() {
        this.isLoading = true;
        this.tasks = TaskApi.getAllTasks();
        this.filter = ETaskFilter.ALL;
        this.isLoading = false;
        this.updateSearchTitle('')
    }
}
export const taskStore = new TaskStore();
export type TTaskStore = typeof taskStore;