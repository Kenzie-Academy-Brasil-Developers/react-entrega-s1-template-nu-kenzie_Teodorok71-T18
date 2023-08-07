import { useState } from "react"
import { Form } from "../../Components/SectionForm"
import { SectionList } from "../../Components/SectionList"
import {v4 as uuidv4} from "uuid"


export const HomePage = () =>{
    const [noteList, setNoteList] = useState([])
  
    const addNote = (formData) =>{
        const newNote  = {...formData,id: uuidv4() }
        setNoteList([...noteList,newNote])

    }
    
    const removeNote = (removeId) =>{
        const newNoteList = noteList.filter(note => note.id !== removeId)
        setNoteList(newNoteList)
    }

    const totalMoney = noteList.reduce((prevValue, note) => {
        return prevValue + parseFloat(note.value);
      }, 0);



    return(
        <div>
            <Form addNote = {addNote}/>
            <SectionList noteList = {noteList} removeNote= {removeNote}/>
            <span>Valor total: R$ {totalMoney}</span>
            <p>O valor de refere ao saldo</p>
        </div>
    )
}