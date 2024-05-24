import Button from "components/button";


const PaginationButtons = ({ currentPage, totalPages, onPageChange, pageButtonsLimit = 5 }) => {
    // Determine the range of page numbers to display
    const startPage = Math.max(1, currentPage - Math.floor(pageButtonsLimit / 2));
    const endPage = Math.min(totalPages, startPage + pageButtonsLimit - 1);

    // Generate page numbers to display
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex flex-wrap justify-center items-center w-full gap-1 my-3">
            <Button
                text="Previous"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
            {pageNumbers.map((pageNumber) => (
                <Button
                    key={pageNumber}
                    text={pageNumber}
                    variant={pageNumber === currentPage ? 'secondary' : ''}
                    onClick={() => onPageChange(pageNumber)}
                    disabled={pageNumber === currentPage}
                />
            ))}
            <Button
                text="Next"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
        </div>
    );
};

export default PaginationButtons;
// import Button from "components/button";

// const PaginationButtons = ({ currentPage, totalPages, onPageChange, pageButtonsLimit = 5 }) => {
//     // Determine the range of page numbers to display
//     let startPage = Math.max(1, currentPage - Math.floor(pageButtonsLimit / 2));
//     let endPage = Math.min(totalPages, startPage + pageButtonsLimit - 1);

//     // Adjust startPage and endPage if they go out of bounds
//     if (endPage - startPage + 1 < pageButtonsLimit) {
//         startPage = Math.max(1, endPage - pageButtonsLimit + 1);
//     }

//     // Generate page numbers to display
//     const pageNumbers = [];
//     for (let i = startPage; i <= endPage; i++) {
//         pageNumbers.push(i);
//     }

//     return (
//         <div className="flex flex-wrap justify-center items-center w-full gap-1 my-3">
//             {/* Previous Button */}
//             <Button
//                 text="Previous"
//                 onClick={() => onPageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//             />

//             {/* First Page Button */}
//             {startPage > 1 && (
//                 <>
//                     <Button
//                         text={1}
//                         onClick={() => onPageChange(1)}
//                         disabled={currentPage === 1}
//                         variant="secondary"
//                     />
//                     {startPage > 2 && <span className="mx-2">...</span>}
//                 </>
//             )}

//             {/* Page Number Buttons */}
//             {pageNumbers.map((pageNumber) => (
//                 <Button
//                     key={pageNumber}
//                     text={pageNumber}
//                     variant={pageNumber === currentPage ? 'secondary' : ''}
//                     onClick={() => onPageChange(pageNumber)}
//                     disabled={pageNumber === currentPage}
//                 />
//             ))}

//             {/* Last Page Button */}
//             {endPage < totalPages && (
//                 <>
//                     {endPage < totalPages - 1 && <span className="mx-2">...</span>}
//                     <Button
//                         text={totalPages}
//                         onClick={() => onPageChange(totalPages)}
//                         disabled={currentPage === totalPages}
//                         variant="secondary"
//                     />
//                 </>
//             )}

//             {/* Next Button */}
//             <Button
//                 text="Next"
//                 onClick={() => onPageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//             />
//         </div>
//     );
// };

// export default PaginationButtons;
