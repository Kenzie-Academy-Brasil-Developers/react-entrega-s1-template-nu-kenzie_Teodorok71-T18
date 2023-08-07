
export const Select = ({children, label, id, value, setValue}) => {
    return (
       <div>
          <label htmlFor={id}>{label}</label>
          <select id={id} name={id} value={value} onChange={(e) => setValue(e.target.value)}>
             {children}
          </select>
       </div>
    );
 };