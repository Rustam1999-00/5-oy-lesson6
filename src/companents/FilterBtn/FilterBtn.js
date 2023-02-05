

export const FilterS = ({text,index,name,setStatuse }) => {
    return (
        <div className="jk">
            <div>
                <input onClick={()=>setStatuse(text) } key={index} type="radio" className="btn" id={`${name}-${index}` }autocomplete="off" name={name} />
                <label className="btn btn-outline-primary" htmlFor={`${name}-${index}` }>{text}</label>
            </div>
        </div>
    )
}