import React from 'react';
import { Skeleton } from '../skeleton';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const SkeletonProductCard = () => {
  const { isGridListing } = useSelector((state: RootState) => state.common);

  if (isGridListing) {
    return (
      <div style={{ width: '100%' }}>
        <Skeleton style={{ height: 250 }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div style={{ width: '80%' }}>
            <Skeleton style={{ height: 15, width: '80%' }} />
            <Skeleton style={{ height: 15, width: '60%', margin: '10px 0 0' }} />
          </div>
          <Skeleton style={{ height: 30, width: '20%' }} />
        </div>
      </div>
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
