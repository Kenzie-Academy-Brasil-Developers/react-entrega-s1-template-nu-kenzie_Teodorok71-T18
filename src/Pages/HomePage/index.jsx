import { useState } from "react"
import { Form } from "../../Components/SectionForm"
import { SectionList } from "../../Components/SectionList"
import {v4 as uuidv4} from "uuid"
import { Header } from "../../Components/Header"
import styles from "./style.module.scss"

export const HomePage = () => {
    const [noteList, setNoteList] = useState([])
    const [totalMoney, setTotalMoney] = useState(0)

    const addNote = (formData) => {
      const newNote = { ...formData, id: uuidv4() }
      setNoteList([...noteList, newNote])
  
      const value = parseFloat(formData.value) 
      if (formData.select === "Entrada") {
        setTotalMoney(totalMoney + value)
      } else if (formData.select === "Despesa") {
        setTotalMoney(totalMoney - value)
      }
    }
    
    const removeNote = (removeId, type, value) => {
        const newNoteList = noteList.filter(note => note.id !== removeId)
        setNoteList(newNoteList)
    
        const numericValue = parseFloat(value);
        if (type === "Entrada") {
            setTotalMoney(totalMoney - numericValue)
        } else if (type === "Despesa") {
            setTotalMoney(totalMoney + numericValue) 
        }
    };

    return(
      <>
        <Header/>
        <main className={styles.main}>
          <div className={styles.div}>
              <Form addNote = {addNote}  setTotalMoney={setTotalMoney}/>
              <SectionList noteList = {noteList} removeNote= {removeNote}/>           
          </div>
          <div className={styles.totalValue}>
              <span className="title3">Valor total: <strong>R$ {totalMoney}</strong></span>
              <p className="headlineb">O valor se refere ao saldo</p>
          </div>
        </main>
      </>
    )
}
