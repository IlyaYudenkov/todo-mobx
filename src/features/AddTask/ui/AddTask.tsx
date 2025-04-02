import { InputText } from '@/shared/UI/Input'
import cl from './_AddTask.module.scss'
import { Button } from '@/shared/UI/Button'


export const AddTask = () => {
    return (
        <div className={cl.AddTask}>
            <InputText placeholder="Введите задачу"/>
            <Button title="Добавить"/>
        </div>
    )
}