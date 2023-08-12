export const Card = ({descripition, value, select,removeNote,id}) =>{
    return(
        <li>
            <p>{descripition}</p>
            <span>R$ {value}</span>
            <p>{select}</p>
            <button onClick={() => removeNote(id,select,value)}>Remover</button>
        </li>
    )
}
