import cl from './_HeaderTask.module.scss'

interface IHeaderTask{
    title: string
}

export const HeaderTask = ({
    title
}: IHeaderTask) => {
    return (
        <div className={cl.HeaderTask}>
            <h3>TaskName: {title}</h3>
        </div>
    )
}