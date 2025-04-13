import { IIcon } from "@/shared/model/icon.model"

export interface IDefaultForm {
    buttonIcon: IIcon
    inputName: 'searchTitle' | 'titleTask',
    inputPlaceholder: string,

    className?: string
    classNameInput?: string
    classNameButton?: string,
    onSubmit?: (data: string) => void
}