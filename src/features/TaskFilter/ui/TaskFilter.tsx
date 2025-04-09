import { cls } from "@/shared/lib/classes.lib"
import cl from './_TaskFilter.module.scss'
import { InputSelect } from "@/shared/UI/Input"
import { ETaskFilter } from "../model/taskFilter.model"
import { taskStore } from "@/app/store/task.store"
import { TASK_FILTER_OPTIONS_ARRAY } from "../data/taskFilter.data"
import { useMemo } from "react"

interface ITaskFilter {
    className?: string,
}

export const TaskFilter = ({ className }: ITaskFilter) => {

    //MOBX
    const { filter, isFiltered } = taskStore;

    //MEMO
    const defaultOption = useMemo(() => {
        return TASK_FILTER_OPTIONS_ARRAY.find(opt => opt.value === filter)
    }, [isFiltered, filter])    

    //HANDLE
    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        taskStore.setFilterByDone(e.target.value as ETaskFilter);
    }
    return (
        <div className={cls(cl.TaskFilter, className)}>
            <InputSelect selectedOutOption={defaultOption} options={TASK_FILTER_OPTIONS_ARRAY} onChangeEvent={handleOnChange} />
        </div>
    )
}