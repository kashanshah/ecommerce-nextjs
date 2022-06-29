import React from 'react';
import { Skeleton } from '../skeleton';

export const SkeletonPagination = () => {
  return (
    <ul className='d-flex'>
      <li>
        <Skeleton style={{ width: 80 }} />
      </li>
      <li>
        <Skeleton style={{ width: 20 }} />
      </li>
      <li>
        <Skeleton style={{ width: 20 }} />
      </li>
      <li>
        <Skeleton style={{ width: 20 }} />
      </li>
      <li className='d-flex align-items-end'>
        <Skeleton style={{ width: 5, height: 5 }} />
      </li>
      <li className='d-flex align-items-end'>
        <Skeleton style={{ width: 5, height: 5 }} />
      </li>
      <li className='d-flex align-items-end'>
        <Skeleton style={{ width: 5, height: 5 }} />
      </li>
      <li>
        <Skeleton style={{ width: 20 }} />
      </li>
      <li>
        <Skeleton style={{ width: 20 }} />
      </li>
      <li>
        <Skeleton style={{ width: 20 }} />
      </li>
      <li>
        <Skeleton style={{ width: 80 }} />
      </li>
    </ul>
  );
};
