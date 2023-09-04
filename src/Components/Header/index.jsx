import Logo from"../../Assets/KenzieLogo.svg"
import styles from "./style.module.scss"

 export const Header = () =>{
    return(
        <header className={styles.header}>
            <img src={Logo} alt="Imagem Kenzie" />
        </header>
    )
}