import { Card } from "../Card";

export const SectionList = ({ noteList, removeNote }) => {

  return (
    <div>
      <h3 className="title3">Resumo Financeiro</h3>
      <ul>
        {noteList.map((note) => {
          return <Card key={note.id} id={note.id} descripition={note.descripition} value={note.value} select={note.select} removeNote={removeNote} />
        })}
      </ul>
      {noteList.length === 0 ? (
        <p className="title2">Você ainda não possui nenhum lançamento</p>
      ) : null}
    </div>
  )
};
