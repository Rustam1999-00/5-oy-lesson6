

import {NavLink } from "react-router-dom"




function Header() {

    return (
        <div className="p-3 bg-info shadow">
            <div className="container d-flex align-item-center justify-content-between">
                <h1>The Rick and Morty</h1>
                <nav>
                    <ul className="d-flex align-item-center gap-3 list-unstyled w-25">
                        <li>
                            <NavLink className={({isActive})=> isActive ?'fs-3 text-light':'fs-3 text-light text-decoration-none'} to={'/'}> Charecter</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=> isActive ?'fs-3 text-light':'fs-3 text-light text-decoration-none'}  to={'/Wether'}> Eepsode</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive})=> isActive ?'fs-3 text-light':'fs-3 text-light text-decoration-none'}  to={'/News'}> Location</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )

}
export default Header