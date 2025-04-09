import { IOption } from "@/shared/model/option.model";
import { ETaskFilter } from "../model/taskFilter.model";

export const TASK_FILTER_OPTIONS_ARRAY: IOption[] = [
    { id: 1, name: ETaskFilter.ALL, value: ETaskFilter.ALL },
    { id: 2, name: ETaskFilter.COMPLETED, value: ETaskFilter.COMPLETED },
    { id: 3, name: ETaskFilter.UNCOMPLETED, value: ETaskFilter.UNCOMPLETED }
]