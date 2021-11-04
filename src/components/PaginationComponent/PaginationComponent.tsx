import React from 'react';
import Pagination from '@material-ui/core/Pagination';

interface IPaginationComponentProps {
  currentPage: number;
  paginateHandleChange: (event: React.ChangeEvent<unknown>, page: number) => void;
  count: number;
}

export function PaginationComponent(props: IPaginationComponentProps): JSX.Element {
  const { currentPage, paginateHandleChange, count } = props;

  function scrollToTop(): void {
    window.scroll({
      top: 0,
    });
  }

  return (
    <div className="pagination">
      <Pagination onClick={scrollToTop} onChange={paginateHandleChange} color="secondary" page={currentPage} count={count} />
    </div>
  );
}
