import { WrapperFlex } from "@/shared/UI/Wrapper"
import { TaskHomeSection } from "@/widgets/TaskHomeSection"
import { TaskSidebar } from "@/widgets/TaskSidebar"

export const HomePage = () => {
    return (
        <WrapperFlex>
            <TaskHomeSection />
            <TaskSidebar />
        </WrapperFlex>
    )
}