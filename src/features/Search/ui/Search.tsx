import { InputText } from "@/shared/UI/Input"
import cl from './_Search.module.scss'
import { Button } from "@/shared/UI/Button"

export const Search = () => {
    
    return (
        <div className={cl.Search}>
            <InputText placeholder="Поиск"/>
            <Button title="Поиск"/>
        </div>
    )
}