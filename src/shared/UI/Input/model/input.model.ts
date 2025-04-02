import { TFunc } from "@/shared/model/function.model"
import { ChangeEvent } from "react"

/**
 * Интерфейс для реализации `Input`
 */
export interface IInput {
    name?: string
    placeholder?: string
    required?: boolean
    disabled?: boolean

    onChange?: TFunc
    onChangeEvent?: (e: ChangeEvent) => void
    className?: string
}