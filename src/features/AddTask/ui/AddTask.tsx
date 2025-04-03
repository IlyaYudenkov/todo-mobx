import { InputText } from '@/shared/UI/Input'
import cl from './_AddTask.module.scss'
import { Button } from '@/shared/UI/Button'
import { PLUS_ICON } from '@/shared/data/icon/plus.icon'


export const AddTask = () => {
    return (
        <div className={cl.AddTask}>
            <InputText className={cl.inputTask} placeholder="Введите задачу"/>
            <Button className={cl.addButtonTask} afterImage={PLUS_ICON} afterProps={{width: 20, height: 20}}/>
        </div>
    )
}