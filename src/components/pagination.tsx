import React from 'react';
import { SkeletonPagination } from './skeleton/skeleton-pagination';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

export const Pagination = (props: ReactPaginateProps & { isLoading?: boolean }) => {
  const { isLoading, ...rest } = props;

  if (isLoading) {
    return <SkeletonPagination />;
  }
  return (
    <ReactPaginate
      pageLinkClassName=''
      activeLinkClassName='current'
      renderOnZeroPageCount={null}
      className='d-flex'
      {...rest}
    />
  );
};
