import cl from './_Checkbox.module.scss'
import { useEffect, useState } from "react";

interface ICheckbox {
    title?: string;
    checked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLLabelElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export const Checkbox = ({
    title,
    checked = false,
    onClick,
    onChange,
}: ICheckbox) => {

    //STATE
    const [isChecked, setIsChecked] = useState<boolean>(false);

    //EFFECT
    useEffect(() => {
        setIsChecked(checked)
    }, [checked])

    //HANDLE
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();
        setIsChecked(!isChecked);
        onChange?.(e, !isChecked)
    }

    return (
        <label className={cl.wrapperCheckbox} onClick={e => onClick?.(e)}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => handleChange(e)}
                className={cl.inputCheckbox}
            />
            <span className={cl.checkmark} />
            {title && <span className={cl.title}>{title}</span>}
        </label>
    )
}