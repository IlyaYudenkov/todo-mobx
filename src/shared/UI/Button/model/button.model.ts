import { TFunc } from "@/shared/model/function.model"
import { IIcon, IIconProps } from "@/shared/model/icon.model"
import { RefObject, ReactNode } from "react"

export enum EButtonType{
    SUBMIT = 'submit',
    RESET = 'reset',
    BUTTON = 'button'
}


export type IButtonWORef = Omit<IButton, 'ref'>

export interface IButton {
    type?: 'button' | 'submit'
    isRounded?: boolean

    ref?: RefObject<HTMLButtonElement>

    title?: string,
    href?: string

    beforeImage?: IIcon
    beforeProps?: IIconProps
    afterImage?: IIcon
    afterProps?: IIconProps
    
    active?: boolean
    success?: boolean,
    disabled?: boolean
    hovered?: boolean
    loading?: boolean
    noTranslation?: boolean

    onClick?: TFunc
    onMouseEnter?: TFunc
    onMouseLeave?: TFunc

    children?: ReactNode
    className?: string
    classNameLink?: string
    classNameText?: string
    classNameTextHovered?: string
    classNameTextPressed?: string
    classNameTextDisabled?: string
}