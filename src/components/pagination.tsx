import {SkeletonPagination} from "./skeleton/skeleton-pagination";
import ReactPaginate, {ReactPaginateProps} from "react-paginate";
import React from "react";
import {useGoToUrl} from "../utils/url";

export const Pagination = (props: ReactPaginateProps & { isLoading?: boolean }) => {
  const {isLoading, ...rest} = props

  const goToUrl = useGoToUrl();

  if (isLoading) {
    return <SkeletonPagination/>
  }
  return <ReactPaginate
    pageLinkClassName=''
    activeLinkClassName='current'
    renderOnZeroPageCount={null}
    className='d-flex' {...rest}
  />
}
