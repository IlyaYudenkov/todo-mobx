export interface ITaskItem {
    id: number,
    title: string,
    description?: string,
    done: boolean
    className?: string
}