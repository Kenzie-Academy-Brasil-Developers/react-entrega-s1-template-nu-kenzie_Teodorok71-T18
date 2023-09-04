
export const Select = ({children, label, id, value, setValue}) => {
    return (
       <div>
          <label className="label" htmlFor={id}>{label}</label>
          <select className="select" id={id} name={id} value={value} onChange={(e) => setValue(e.target.value)}>
             {children}
          </select>
       </div>
    );
 };