import React, { useState } from "react";
import { Button } from "../../atoms/Button";


interface ListWithPaginationProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  itemsPerPage?: number;
}

export const ListWithPagination = <T,>({
  items,
  renderItem,
  itemsPerPage = 5,
}: ListWithPaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{renderItem(item)}</li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <Button onClick={handlePrevPage} disabled={currentPage === 1} variant="secondary">
          Previous
        </Button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages} variant="secondary">
          Next
        </Button>
      </div>
    </div>
  );
};
