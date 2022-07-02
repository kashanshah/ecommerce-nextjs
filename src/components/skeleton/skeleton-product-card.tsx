import React from 'react';
import { Skeleton } from '../skeleton';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const SkeletonProductCard = () => {
  const { isGridListing } = useSelector((state: RootState) => state.common);

  if (isGridListing) {
    return (
      <>
        <Skeleton style={{ height: 300 }} />
        <Skeleton style={{ height: 10, width: 90, margin: '10px auto 0' }} />
        <Skeleton style={{ height: 20, width: 200, margin: '10px auto 0' }} />
        <Skeleton style={{ height: 20, width: 80, margin: '10px auto 0' }} />
        <Skeleton style={{ height: 30, width: 100, margin: '10px auto 0' }} />
      </>
    );
  }

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Skeleton style={{ width: '40%', height: 200, margin: 5 }} />
      <div style={{ width: '60%', marginLeft: 30, height: 200 }}>
        <Skeleton style={{ width: '60%', height: 20, margin: 10 }} />
        <Skeleton style={{ width: '20%', height: 20, margin: 10 }} />
        <Skeleton style={{ width: '100%', height: 20, margin: 10 }} />
        <Skeleton style={{ width: '100%', height: 20, margin: 10 }} />
        <Skeleton style={{ width: '50%', height: 20, margin: 10 }} />
      </div>
    </div>
  );
};
