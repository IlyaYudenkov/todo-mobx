import { Search } from '@/features/Search'
import cl from './_Header.module.scss'

export const Header = () => {
    return (
        <header className={cl.Header}>
            <h3>Dashboard</h3>
            <Search />
        </header>
    )
}