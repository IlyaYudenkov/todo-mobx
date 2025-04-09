import { cls } from "@/shared/lib/classes.lib"
import cl from './_WrapperFlex.module.scss'
import { PropsWithChildren } from "react"

interface IWrapperFlex extends PropsWithChildren {
    className?: string,
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
