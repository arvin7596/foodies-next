import Link from "next/link"
import classes from "./main-header.module.css"
import logo from "@/assets/logo.png"
import MainHeaderBackground from "./main-header-background"
import NavLink from "./nav-link"
import Image from "next/image"
function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logo} alt="a plate with food on it" priority />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <NavLink href={"/meals"}>Browse Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href="/community">Foodie community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default MainHeader
