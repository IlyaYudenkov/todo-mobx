import { ReactNode } from "react";
import { MobxContext } from "./MobxContext";
import { taskStore } from "@/app/store/task.store";

interface IMobxProvider {
    children: ReactNode
}


export const MobxProvider = ({ children }: IMobxProvider) => {
    return (
        <MobxContext.Provider value={{
            taskStore
        }}>
            {children}
        </MobxContext.Provider>
    )
}