import { InputText } from "@/shared/UI/Input"
import cl from './_Search.module.scss'
import { Button } from "@/shared/UI/Button"
import { MAGNIFIER_ICON } from "@/shared/data/icon/magnifier.icon"
import { FormEvent, useRef } from "react"
import { taskStore } from "@/app/store/task.store"
import { getFormData } from "@/shared/lib/formData.lib"
import { EButtonType } from "@/shared/UI/Button/model/button.model"

export const Search = () => {

    //REF
    const formRef = useRef<HTMLFormElement>(null)

    //HANDLE
    const searchByTitle = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!formRef.current) return;
        const { searchTitle } = getFormData(new FormData(formRef.current))

        if (!searchTitle) return;
        taskStore.updateSearchTitle(searchTitle)
    }

    return (
        <form className={cl.Search} ref={formRef} onSubmit={searchByTitle}>
            <InputText
                className={cl.inputSearch}
                name="searchTitle"
                placeholder="Поиск"
            />
            <Button
                type={EButtonType.SUBMIT}
                className={cl.buttonSearch}
                afterImage={MAGNIFIER_ICON}
                afterProps={{ width: 20, height: 20 }}
            />
        </form>
    )
}