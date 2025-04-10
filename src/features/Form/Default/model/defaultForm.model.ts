import { IIcon } from "@/shared/model/icon.model"

export interface IDefaultForm {
    buttonIcon: IIcon
    inputName: string,
    inputPlaceholder: string,

    className?: string
    classNameInput?: string
    classNameButton?: string,
}