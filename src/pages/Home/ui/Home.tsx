import { Wrapper1280 } from "@/shared/Wrapper"
import { TaskHomeSection } from "@/widgets/TaskHomeSection"
import { TaskSidebar } from "@/widgets/TaskSidebar/ui/TaskSidebar"

export const Home = () => {
    return (
        <Wrapper1280>
            <TaskHomeSection />
            <TaskSidebar />
        </Wrapper1280>
    )
}