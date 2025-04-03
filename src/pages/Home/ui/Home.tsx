import { WrapperFlex } from "@/shared/UI/Wrapper"
import { TaskHomeSection } from "@/widgets/TaskHomeSection"
import { TaskSidebar } from "@/widgets/TaskSidebar/ui/TaskSidebar"

export const Home = () => {
    return (
        <WrapperFlex>
            <TaskHomeSection />
            <TaskSidebar />
        </WrapperFlex>

    )
}