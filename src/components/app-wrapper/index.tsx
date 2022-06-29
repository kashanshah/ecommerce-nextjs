import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateIsPageLoading } from '../../redux/common-slice';

export const AppWrapper = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(updateIsPageLoading(false));
    }, 500);
  }, []);

  return <React.Fragment {...props} />;
};
