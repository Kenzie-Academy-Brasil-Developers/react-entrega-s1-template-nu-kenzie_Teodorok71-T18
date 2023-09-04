import { useState } from "react"
import { Input } from "../Input"
import { Select } from "../Selec"
import styles from "./style.module.scss"



export const Form = ({addNote}) =>{
    const [descripition, setDescription] = useState("")
    const [value, setValue] = useState()
    const [select, setSelect] = useState("Entrada")

    const submit = (event) =>{

        event.preventDefault()

        addNote({descripition,value,select})
        setDescription("")
        setValue("")
        setSelect("Entrada")
    }


    return(
        <form className={styles.form} onSubmit={submit}>
            <div className={styles.div}>
            <Input
            label= "Descrição"
            placeholder="Digite aqui sua descrição"
            type="text"
            id="description"
            value={descripition}
            setValue={setDescription}       
            />
            <Input
            label= "Valor (R$)"
            placeholder="1"
            type="number"
            id="valor"
            value={value}
            setValue={setValue}           
            />
            <Select label="Tipo de valor" id="select" value={select} setValue={setSelect}>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
            </Select>
          
           

           
            <button className="buttom" type="submit">Inserir Valor</button>
            </div>
        </form>
    )
}