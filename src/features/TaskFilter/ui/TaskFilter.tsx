import { cls } from "@/shared/lib/classes.lib"
import cl from './_TaskFilter.module.scss'
import { InputSelect } from "@/shared/UI/Input"
import { IOption } from "@/shared/model/option.model"
import { ETaskFilter } from "../model/taskFilter.model"

interface ITaskFilter{
    className?: string,

}

export const TaskFilter = ({className}: ITaskFilter) => {

    const TASK_FILTER_OPTIONS_ARRAY: IOption[] = [
        {id: 1, name: ETaskFilter.ALL, value: ETaskFilter.ALL},
        {id: 2, name: ETaskFilter.COMPLETED, value: ETaskFilter.COMPLETED},
        {id: 3, name: ETaskFilter.UNCOMPLETED, value: ETaskFilter.UNCOMPLETED}
    ]

    return (
        <div className={cls(cl.TaskFilter, className)}>
            <InputSelect options={TASK_FILTER_OPTIONS_ARRAY}/>
        </div>
    )
}
