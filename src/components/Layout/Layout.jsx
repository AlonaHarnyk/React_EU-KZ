import { Outlet, useLocation } from "react-router-dom"
import { Navigation } from "components/Navigation/Navigation"

export const Layout = () => {
    const location = useLocation()
    return (
        <>
            <header>{!location.pathname.includes('details') && <Navigation />}</header>
            <main><Outlet/></main>
            <footer>Footer</footer>
        </>
    )
} 