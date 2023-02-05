

import { Search } from "../../companents/Search/Search"
import { Filter } from "../../companents/Filter/Filter"
import { Card } from "../../companents/Card/Card"
import { useState,useEffect } from "react"
import { Pagenation } from "../../companents/Pagination/Pagenation"

export const Charecter = () => {


    const [activePages,setActive]=useState(1)
    const [search,setSearch]= useState('')

    const [data,setData]=useState([])  
    const {info,results} = data
    const [statuse,setStatuse] = useState('')
    const [gender,setGender]=useState('')



let api = `https://rickandmortyapi.com/api/character/?page=${activePages}&name=${search}&status=${statuse}&gender=${gender}`






useEffect(()=>{
    (async ()=>{
        const data = await fetch(api).then((res)=>res.json());
        setData(data)
    })()
},[api])



    return (
        <div>
            <Search setActivpage={setActive} setSearchs={setSearch}  />
            <div className="row">
                <div className="col-3">
                    <Filter setStatuse={setStatuse} setGender={setGender} />
                </div>
                <div className="col-9">

                   {
                    results?.length ? ( 
                        <div className="d-flex flex-wrap gap-5">
                            {
                                results.map((item)=>(
                                    <Card key={item.id} name={item.name} image={item.image} lication={item.location} status={item.status}/>
                                ))
                            }
                        </div>
                    ):(<h5> fonde not fonde</h5>)
                   }
                </div>
            </div>
            <Pagenation page={info?.pages} pageActiv={setActive} activePages={activePages}/>
        </div>
    )
}