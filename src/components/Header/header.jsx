import Link from "next/link"
import styles from "../../styles/layout/components/Header/header.module.scss"

export default function Header() {
    
    return(
        <header className={`${styles['header-full']} ${styles['padding']}`} >

            <nav className={`${styles['header-nav']}`}>
                <ul>
                <li> <Link href="/"> Home </Link> </li>
                <li> <Link href="/listapaciente"> Lista Paciente </Link></li>
                <li> <Link href="/batata"> Batata </Link></li>
                <li>Teste3</li>
                </ul>
            </nav>
        </header>
    )
}