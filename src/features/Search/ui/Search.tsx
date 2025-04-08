import { InputText } from "@/shared/UI/Input"
import cl from './_Search.module.scss'
import { Button } from "@/shared/UI/Button"
import { MAGNIFIER_ICON } from "@/shared/data/icon/magnifier.icon"
import { FormEvent, useRef } from "react"
import { taskStore } from "@/app/store/task.store"
import { getFormData } from "@/shared/lib/formData.lib"

export const Search = () => {

    //REF
    const formRef = useRef<HTMLFormElement>(null)

    //HANDLE
    const searchByTitle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!formRef.current) return;
        const { titleTask } = getFormData(new FormData(formRef.current))

        if (!titleTask) return;
        taskStore.searchTaskByTitle({ title: titleTask })
    }

    return (
        <form className={cl.Search} ref={formRef}>
            <InputText
                className={cl.inputSearch}
                name="titleTask"
                placeholder="Поиск"
            />
            <Button
                className={cl.buttonSearch}
                afterImage={MAGNIFIER_ICON}
                afterProps={{ width: 20, height: 20 }}
                onClick={searchByTitle}
            />
        </form>
    )
}