import { A } from "./Navigation.styled"

export const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><A to='/' end>Home</A></li>
                <li><A to='/events'>Events</A></li>
                <li><A to='/search'>Search</A></li>
            </ul>
        </nav>
    )
}