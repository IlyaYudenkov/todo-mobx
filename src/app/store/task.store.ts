import { TaskApi } from "@/entities/Task/api/task.api";
import { ITaskItem } from "@/entities/Task/model/task.model";
import { ETaskFilter } from "@/features/TaskFilter/model/taskFilter.model";
import { makeAutoObservable } from "mobx";

class TaskStore {
    tasks: ITaskItem[] = []
    isLoading: boolean = false
    isFiltered: boolean = false
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

    addTask({ title, description }: ITaskItem) {
        const newTask = {
            id: Date.now(),
            title,
            description,
            done: false
        }
        this.tasks = TaskApi.addNewTask(newTask)
    }

    deleteTask(id: number){
        this.tasks = TaskApi.deleteTask(id)
    }

    updateTask(task: ITaskItem){
        const searchTask = this.getTask(task?.id);
    }

    updateSearchTitle(title: string){
        if(!title) return;
        this.searchTitle = title;
    }

    getTask(id: number){
        return this.tasks.find(task => task.id === id)
    }

    toggleTheTask(id: number, completed?: boolean){
        const isDone = completed ?? this.getTask(id)?.done
        this.tasks = TaskApi.updateTask(id, {
            done: isDone
        })
    }

    //FILTERS
    get filteredTasksBySearch() {
        if(!this.searchTitle) return this.getAll();        
		this.tasks = this.tasks.filter(task => task.title.toLowerCase().includes((this.searchTitle as string).toLowerCase()))
        this.isFiltered = true 
	}

    setFilterByDone(filter: ETaskFilter){
        this.isFiltered = false;
        if(filter !== ETaskFilter.ALL) this.isFiltered = true;
        this.filter = filter
    }
    
    get filteredTasksByDone() {
        switch (this.filter) {
            case ETaskFilter.COMPLETED:
                return this.tasks.filter(task => task.done)
            case ETaskFilter.UNCOMPLETED:
                return this.tasks.filter(task => !task.done)
            default:
                return this.tasks;
        }
	}

    resetTheFilters(){
        this.isLoading = true;
        this.tasks = TaskApi.getAllTasks();
        this.filter = ETaskFilter.ALL;
        this.isFiltered = false;
        this.isLoading = false;      
    }
}
export const taskStore = new TaskStore();
export type TTaskStore = typeof taskStore;