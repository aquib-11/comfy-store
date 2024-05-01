const FormSelect = ({label ,name, list, defaultValue, size}) => {
  return (
    <div className="form-control">
        <label htmlFor={name} className="label ">
            <span className="leabel-text capitalize">{label}</span>
        </label>
        <select id={name} 
        name={name} 
        defaultValue={defaultValue} 
        className={`select select-bordered ${size}`}>
            {
                list.map((item)=>{
                    return <option key={item} value={item}>
                        {item}
                    </option>
                })
            }
        </select>
    </div>
  )
}
export default FormSelect