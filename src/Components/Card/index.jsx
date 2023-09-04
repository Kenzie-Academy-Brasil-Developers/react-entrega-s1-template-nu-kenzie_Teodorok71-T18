import styles from "./style.module.scss"

export const Card = ({ descripition, value, select, removeNote, id }) => {
    const borderClass = select === "Entrada" ? styles.entryBorder : styles.exitBorder;

    return (
        <li className={`${styles.li} ${borderClass}`}>
            <p className="titleLi">{descripition}</p>
            <span className="body">R$ {value}</span>
            <div className={styles.div}>
                <p className="bodyb">{select}</p>
                <button className="buttomRemove" onClick={() => removeNote(id, select, value)}>Excluir</button>
            </div>
        </li>
    )
}