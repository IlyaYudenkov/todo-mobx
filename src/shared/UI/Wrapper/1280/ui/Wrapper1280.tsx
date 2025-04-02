import { forwardRef, ReactNode, Ref } from 'react'
import cl from './_Wrapper1280.module.scss'
import { cls } from '@/shared/lib/classes.lib'

interface IWrapper1280 {
    children?: ReactNode
    classNameWrapper?: string
    classNameContent?: string
}

export const Wrapper1280 = forwardRef<HTMLDivElement, IWrapper1280>((
    {
        children, 
        classNameWrapper, 
        classNameContent
    }, refOut: Ref<HTMLDivElement>
) => {
    return (
        <div className={cls(cl.wrapper, classNameWrapper)}>
            <div ref={refOut} className={cls(cl.content, classNameContent)}>
                {children}
            </div>
        </div>
    )
});