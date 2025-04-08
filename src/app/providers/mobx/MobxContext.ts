import { TTaskStore, taskStore } from "@/app/store/task.store";
import { createContext } from "react";

export const MobxContext = createContext<{
    taskStore: TTaskStore
}>({
    taskStore
})