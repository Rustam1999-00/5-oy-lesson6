export const Search = ({setSearchs ,setActivpage})=>{
    return(
       <input  onChange={(evt)=>{setSearchs(evt.target.value); setActivpage(1)}} className=" form-control w-50 offset-3 mb-4 rounded-pill" placeholder="Search....." type='search'/>
    )
}