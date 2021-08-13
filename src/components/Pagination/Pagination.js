import {React} from 'react'

export default function Pagination({posts, perPage, paginate, pageCount}) {


    const pageNumbers = []
    for(let i=1; i<=Math.ceil(posts.length / perPage); i++){
        pageNumbers.push(i);
    }
   
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick ={() => paginate(number)} href="!#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))
                 }
            </ul>
        </nav>
    )
}
