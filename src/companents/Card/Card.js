

import { Link } from "react-router-dom"

export const Card = ({image,name,Location,status })=>{
    return(
 < div className="d-flex flex-wrap gap-3">
        <div className="card position-relative" style={{width: '18rem'}}>
           {
            (function (){
                if(status === 'Alive'){
                return(
                
                        <span style={{top:'10px',right:'10px'}} className="position-absolute bedge bg-success px-3 py-2 fs-6 rounded-pill ">{status}</span>
                    
                )
                }else if(status === 'Dead'){
                    return(
                        <span style={{top:'10px',right:'10px'}} className="position-absolute bedge bg-danger px-3 py-2 fs-6 rounded-pill ">{status}</span>
                    )
                }else{
                    return(
                        <span style={{top:'10px',right:'10px'}} className="position-absolute bedge bg-secondary px-3 py-2 fs-6 rounded-pill ">{status}</span>
                    )
                }
            })()
           }
           
        <img src={image} className='card-img-top'  alt='kjh'/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Last Location</p>
          <p className="card-text">{Location}</p>
          <Link to="/" class="btn btn-primary">More</Link>
        </div>
      </div>
 </div>
    )
}