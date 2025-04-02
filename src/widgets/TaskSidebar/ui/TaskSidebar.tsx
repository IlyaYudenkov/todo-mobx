import { InputText } from '@/shared/UI/Input'
import cl from './_TaskSidebar.module.scss'
import { EInputTextVariants } from '@/shared/UI/Input/ui/Text/model/inputText.model'



export const TaskSidebar = () => {
    return (
        <aside className={cl.TaskSidebar}>
            <h3>TaskName:</h3>
            <InputText placeholder='Введите название задачи'/>
            <InputText placeholder='Введите описание задачи' variant={EInputTextVariants.TEXTAREA}/>
        </aside>
    )
}