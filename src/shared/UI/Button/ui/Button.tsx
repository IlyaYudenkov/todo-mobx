import { useEffect, useState } from "react"
import cl from './_Button.module.scss'
import { EButtonType, EButtonVariant, IButton } from "../model/button.model"
import { cls } from "@/shared/lib/classes.lib"
import { ImageSmart } from "../../ImageSmart/ui/ImageSmart"

export const Button = ({
    type = EButtonType.BUTTON,
    variant = EButtonVariant.DEFAULT,
    isRounded = true,
    ref,
    title, href,
    beforeImage, beforeProps, afterImage, afterProps = {width: 20, height: 20},
    active = false, success = false, disabled = false, hovered, loading = false,
    onClick = () => { }, onMouseEnter = () => { }, onMouseLeave = () => { },
    children, className, classNameLink,
    classNameText, classNameTextHovered, classNameTextPressed, classNameTextDisabled,
}: IButton) => {
    // STATE
    const [isHovered, setIsHovered] = useState<boolean>(false)
    const [isPressed, setIsPressed] = useState<boolean>(false)
    const [sizeImage, setSizeImage] = useState({ width: 10, height: 10 })

    // HANDLE
    const handleOnMouseEnter = () => {
        setIsHovered(true)
        onMouseEnter()
    }
    const handleOnMouseLeave = () => {
        setIsHovered(false)
        setIsPressed(false)
        onMouseLeave()
    }

    const handleOnMouseDown = () => {
        setIsPressed(true)
        setIsHovered(true)
    }
    const handleOnMouseUp = () => {
        setIsPressed(false)
        setIsHovered(true)
    }

    // EFFECT
    useEffect(() => {
        if (hovered !== undefined)
            setIsHovered(hovered)
    }, [hovered])

    const html = (
        <button type={type} ref={ref} disabled={disabled || loading}
            onClick={e => onClick(e)} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}
            onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp}
            className={cls(
                cl.button,
                cl[variant],
                isRounded ? cl.rounded : '',
                active ? cl.active : '',
                !title ? cl.noTitle : '',
                className
            )}>
            {beforeImage &&
                <ImageSmart {...beforeProps} icon={beforeImage}
                    width={beforeProps && beforeProps.width ? beforeProps.width : sizeImage.width}
                    height={beforeProps && beforeProps.height ? beforeProps.height : sizeImage.height}
                    isActive={active} isHovered={isHovered} isSuccess={success} isPressed={isPressed} isDisabled={disabled} />

            }
            {title &&
                <span className={cls(
                    cl.title, classNameText,
                    isHovered ? classNameTextHovered : '',
                    isPressed ? classNameTextPressed : '',
                    disabled ? classNameTextDisabled : '',
                )}>{title}</span>
            }
            {afterImage &&
                <ImageSmart {...afterProps} icon={afterImage}
                    width={afterProps && afterProps.width ? afterProps.width : sizeImage.width}
                    height={afterProps && afterProps.height ? afterProps.height : sizeImage.height}
                    isActive={active && !success} isHovered={isHovered} isSuccess={success} isPressed={isPressed} isDisabled={disabled} />
            }
            {children}
        </button>
    )


    // if (!href)
        return html
    // return (
    //     <Link to={href} className={classNameLink}>{html}</Link>
    // )
}