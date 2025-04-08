import { cls } from "@/shared/lib/classes.lib"
import cl from './_WrapperFlex.module.scss'
import { ReactNode } from "react"

interface IWrapperFlex{
    className?: string,
    children?: ReactNode
}

export const WrapperFlex = ({
    className,
    children
}: IWrapperFlex) => {
    return (
        <div className={cls(cl.WrapperFlex, className)}>
            {children}dsadasdasd
        </div>
    )
}
