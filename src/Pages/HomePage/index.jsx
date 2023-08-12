import { useState } from "react"
import { Form } from "../../Components/SectionForm"
import { SectionList } from "../../Components/SectionList"
import {v4 as uuidv4} from "uuid"

export const HomePage = () => {
    const [noteList, setNoteList] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0); // Inicialize com 0, já que é um valor numérico

    const addNote = (formData) => {
      const newNote = { ...formData, id: uuidv4() };
      setNoteList([...noteList, newNote]);
  
      const value = parseFloat(formData.value); // Converta o valor para número
      if (formData.select === "Entrada") {
        setTotalMoney(totalMoney + value);
      } else if (formData.select === "Despesa") {
        setTotalMoney(totalMoney - value);
      }
    };
    
    const removeNote = (removeId, type, value) => {
        const newNoteList = noteList.filter(note => note.id !== removeId);
        setNoteList(newNoteList);
    
        const numericValue = parseFloat(value);
        if (type === "Entrada") {
            setTotalMoney(totalMoney - numericValue);
        } else if (type === "Despesa") {
            setTotalMoney(totalMoney + numericValue); // Subtrair o valor da despesa
        }
    };

    console.log("Total money in HomePage:", totalMoney);
    return(
        <div>
            <Form addNote = {addNote}  setTotalMoney={setTotalMoney}/>
            <SectionList noteList = {noteList} removeNote= {removeNote}/>           
            <span>Valor total: R$ {totalMoney}</span>
            <p>O valor de refere ao saldo</p>
        </div>
    )
}
