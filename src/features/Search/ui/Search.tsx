import { InputText } from "@/shared/UI/Input"
import cl from './_Search.module.scss'
import { Button } from "@/shared/UI/Button"
import { MAGNIFIER_ICON } from "@/shared/data/icon/magnifier.icon"

export const Search = () => {
    
    return (
        <div className={cl.Search}>
            <InputText className={cl.inputSearch} placeholder="Поиск"/>
            <Button className={cl.buttonSearch} afterImage={MAGNIFIER_ICON} afterProps={{width: 20, height: 20}}/>
        </div>
    )
}