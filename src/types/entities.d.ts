
export interface TaskListType {
    id: string
    title: string
    tasks: TaskType[]
}
export interface TaskType {
    id: string
    title: string
    isComplete: boolean
}