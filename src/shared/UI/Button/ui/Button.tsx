import { MouseEventHandler } from "react"
import cl from './_Button.module.scss'
import { EButtonType } from "../model/button.model"

interface IButton {
    title: string,
    onClick?: MouseEventHandler<HTMLButtonElement>
    type?: EButtonType
}


export const Button = ({
    title,
    onClick = () => { },
    type = EButtonType.SUBMIT
}: IButton) => {
    return (
        <button
            className={cl.button}
            title={title}
            onClick={onClick}
            type={type}
        >
            {title}
        </button>
    )
}