

import ReactPaginate from 'react-paginate';

export const Pagenation = ({page,pageActiv,activePages})=>{
    return(
      <ReactPaginate
       pageCount={page} 
       forcePage={activePages ===1? 0 :activePages-1}
      className='pagination justify-content-center gap-3 mt-3 '
      previousLabel='Prev'
      nextLabel='Next'
      previousLinkClassName='btn btn-primary'
      nextLinkClassName='btn btn-primary'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      activeClassName='active'
      onPageChange={(data)=>{
        pageActiv(data.selected+1)
      }}

      />
    )
}