import { cls } from "@/shared/lib/classes.lib"
import cl from './_InputSelect.module.scss'
import { IOption } from "@/shared/model/option.model"
import { useState } from "react"

interface IInputSelect {
    className?: string,
    options: IOption[],
    defaultOption?: IOption,
    onChange?: (option?: IOption) => void
}

export const InputSelect = ({
    className,
    options,
    defaultOption,
    onChange
}: IInputSelect) => {

    //STATE
    const [selectedOption, setSelectedOption] = useState<IOption | undefined>(defaultOption)

    //HANDLE
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const foundOption = options.find(opt => opt.value === event.target.value)
        setSelectedOption(foundOption);
        onChange?.(foundOption)
    }

    return (
        <select value={selectedOption?.value} onChange={handleChange} className={cls(cl.InputSelect, className)}>
            {options.map(opt => (
                <option className={cl.option} value={opt.value} key={opt.id}>{opt.name}</option>
            ))}
        </select>
    )
}