
export const Input = ({label,id,type,placeholder,value,setValue}) =>{
    return(
        <div>
            <label className="label" htmlFor={id}>{label}</label>
            <input 
            className="input"
            placeholder={placeholder}
            type={type} 
            name={id}
            id={id}
            value={value}
            required
            onChange={(event) => setValue(event.target.value)}
            />
            <label className="label" htmlFor={id}>{label}</label>         
        </div>
    )
}