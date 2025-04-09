import { cls } from "@/shared/lib/classes.lib"
import cl from './_InputSelect.module.scss'
import { IOption } from "@/shared/model/option.model"
import { ChangeEvent, useEffect, useState } from "react"

interface IInputSelect {
    className?: string,
    options: IOption[],
    defaultOption?: IOption,
    selectedOutOption?: IOption
    onChange?: (option?: IOption) => void
    onChangeEvent?: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const InputSelect = ({
    className,
    options,
    defaultOption,
    selectedOutOption,
    onChange,
    onChangeEvent
}: IInputSelect) => {

    //STATE
    const [selectedOption, setSelectedOption] = useState<IOption | undefined>(defaultOption)  

    //EFFECT
    useEffect(() => {
        if(defaultOption) setSelectedOption(defaultOption)
        else if(selectedOutOption) setSelectedOption(selectedOutOption)
    }, [defaultOption, selectedOutOption])

    //HANDLE
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const foundOption = options.find(opt => opt.value === e.target.value)
        setSelectedOption(foundOption);
        onChange?.(foundOption)
        onChangeEvent?.(e)
    }    

    return (
        <select value={selectedOption?.value} onChange={handleChange} className={cls(cl.InputSelect, className)}>
            {options.map(opt => (
                <option className={cl.option} value={opt.value} key={opt.id}>{opt.name}</option>
            ))}
        </select>
    )
}