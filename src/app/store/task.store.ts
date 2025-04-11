import { TaskApi } from "@/entities/Task/api/task.api";
import { ITaskItem } from "@/entities/Task/model/task.model";
import { ETaskFilter } from "@/features/TaskFilter/model/taskFilter.model";
import { makeAutoObservable, runInAction } from "mobx";

class TaskStore {
    tasks: ITaskItem[] = []
    isLoading: boolean = false
    filter: ETaskFilter = ETaskFilter.ALL
    searchTitle: string = '';
    selectedTask: ITaskItem = {} as ITaskItem

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
        const updatedTasks = TaskApi.updateTask(task.id, task);
        this.tasks = this.tasks.map(t => t.id === task.id ? updatedTasks.find(it => it.id === task.id)! : t)
        if (this.selectedTask.id === task.id) {
            const updatedTask = updatedTasks.find(t => t.id === task.id);
            if (updatedTask) {
                this.selectedTask = updatedTask;
            }
        }
    }

    updateSearchTitle(title: string) {
        this.searchTitle = title;
    }

    getTask(id: number) {
        return this.tasks.find(task => task.id === id)
    }

    setSelectedTask(task: ITaskItem) {
        this.isLoading = true;
        this.selectedTask = task
        this.isLoading = false;
    }

    toggleTheTask(id: number, done: boolean) {
        const isDone = done ?? this.getTask(id)?.done
        this.tasks = TaskApi.updateTask(id, {
            done: isDone
        })
        if (this.selectedTask.id === id) {
            runInAction(() => {
                taskStore.selectedTask = { ...this.selectedTask, done }
            })
        }
    }

    //FILTERS
    get isFiltered() {
        return this.searchTitle !== '' || this.filter !== ETaskFilter.ALL;
    }

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