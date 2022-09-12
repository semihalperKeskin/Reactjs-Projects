import { useEffect, useState } from "react";
import "./style.css";

const Pagination = ({pages, setCurrentPage}) => {


    const numOfPages = [];

    // items a göre sayfa  sayısı belirleme
    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i)
    }

    const [currentButton, setCurrentButton] = useState(1)

     useEffect(() => {
         setCurrentPage(currentButton)
     }, [currentButton, setCurrentPage])
    
     //pagination jsx leri
    return (
        <div className="clearfix container">
            <ul className="pagination">
                <li className={`${currentButton === 1 ? "page-item disabled" : "page-item"}`}><a href="#!"
                    className="page-link" onClick={() => { setCurrentButton(prev => prev === 1 ? prev : prev - 1) }}
                >Previous</a></li>

                {
                    numOfPages.map((page, index) => {
                       return( <li key={index} className={`${currentButton === page ? "page-item active" : "page-item"}`}><a href="#!" className="page-link" onClick={()=> setCurrentButton(page)}>{page}</a></li> )
                    })
                }

                <li className={`${currentButton === numOfPages.length ? "page-item disabled" : "page-item"}`}><a href="#!"
                    className="page-link" onClick={() => { setCurrentButton(prev => prev === numOfPages.length ? prev : prev + 1) }}
                >Next</a></li>

            </ul>
        </div>
    )
}


export default Pagination;