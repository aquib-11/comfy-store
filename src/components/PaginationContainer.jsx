import { useLoaderData, useLocation, useNavigate } from "react-router-dom"

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (value, index) => {
    return index + 1;
  }); /////returns Array
  const { pathname, search } = useLocation(); //"/products", "search=s+s&category=all&company=all&order=a-z&price=100000"
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search)
    searchParams.set("page", pageNumber)
    navigate(`${pathname}?${searchParams.toString()}`)
  };
  if (pageCount < 2) return null;
  return (
    <div className="flex mt-16 justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() =>{
            let prevPage = page - 1
            if(prevPage < 1) prevPage = pageCount
            handlePageChange(prevPage)}}
        >
          prev
        </button>
        {pages.map((pageNum) => {
          return (
            <button
              key={pageNum}
              className={`btn btn-xs sm:btn-md join-item
                 ${pageNum === page ? "bg-base-300 border-base-300" : ""}`}
              onClick={() => handlePageChange(pageNum)}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() =>{
             let nextPage = page + 1;
             if (nextPage > pageCount) nextPage
              = 1;
             handlePageChange(nextPage)}}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default PaginationContainer