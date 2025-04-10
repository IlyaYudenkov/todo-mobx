import { InputText } from '@/shared/UI/Input'
import cl from './_UpdateTask.module.scss'
import { Button } from '@/shared/UI/Button'
import { EInputTextVariants } from '@/shared/UI/Input/ui/Text/model/inputText.model'
import { taskStore } from '@/app/store/task.store'
import { useEffect, useState } from 'react'
import { ITaskItem } from '@/entities/Task/model/task.model'
import { observer } from 'mobx-react-lite'

interface IUpdateTask {
    selectedTask: ITaskItem
}

export const UpdateTask = observer(({
    selectedTask
}: IUpdateTask) => {
    //STATE
    const [title, setTitle] = useState(selectedTask.title);
    const [description, setDescription] = useState(selectedTask.description);

    //EFFECT
    useEffect(() => {
        setTitle(selectedTask.title);
        setDescription(selectedTask.description);
    }, [selectedTask]);


    //HANDLE
    const handleUpdateTask = () => {
        const updatedFields: Partial<ITaskItem> = {}
        if (title !== selectedTask.title) {
            updatedFields.title = title;
        }
        if (description !== selectedTask.description) {
            updatedFields.description = description;
        }

        taskStore.updateTask({
            ...selectedTask,
            ...updatedFields
        });
    }

    if (!selectedTask) return null;

    return (
        <div className={cl.UpdateTask} >
            <label htmlFor='title'>
                Title
            </label>
            <InputText
                id='title'
                name='title'
                placeholder='Введите название задачи'
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor='description'>
                Description
            </label>
            <InputText
                id='description'
                name='description'
                placeholder='Введите описание задачи'
                variant={EInputTextVariants.TEXTAREA}
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
            <Button
                className={cl.updateButton}
                title='Обновить задачу'
                onClick={handleUpdateTask} />
        </div>
    )
})