import { PropsWithChildren } from "react";
import { MobxContext } from "./MobxContext";
import { taskStore } from "@/app/store/task.store";


export const MobxProvider = ({ children }: PropsWithChildren) => {
    return (
        <MobxContext.Provider value={{
            taskStore
        }}>
            {children}
        </MobxContext.Provider>
    )
}