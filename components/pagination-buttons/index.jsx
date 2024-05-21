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
            {/* Previous Button */}
            <Button
                text="Previous"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            />
            
            {/* Page Number Buttons */}
            {pageNumbers.map((pageNumber) => (
                <Button
                    key={pageNumber}
                    text={pageNumber}
                    variant={pageNumber === currentPage ? 'secondary' : ''}
                    onClick={() => onPageChange(pageNumber)}
                    disabled={pageNumber === currentPage}
                />
            ))}
            
            {/* Next Button */}
            <Button
                text="Next"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            />
        </div>
    );
};

export default PaginationButtons;