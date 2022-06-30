import React from 'react';
import { Skeleton } from '../skeleton';

export const SkeletonProductCard = () => {
  return (
    <>
      <Skeleton style={{ height: 300 }} />
      <Skeleton style={{ height: 10, width: 90, margin: '10px auto 0' }} />
      <Skeleton style={{ height: 20, width: 200, margin: '10px auto 0' }} />
      <Skeleton style={{ height: 20, width: 80, margin: '10px auto 0' }} />
      <Skeleton style={{ height: 30, width: 100, margin: '10px auto 0' }} />
    </>
  );
};
