import { useEffect, useState } from 'react';
import { updateIsPageLoading } from '../../redux/common-slice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

export function PageWrapper(props) {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const [state, setState] = useState();

  useEffect(() => {
    setTimeout(() => {
      dispatch(updateIsPageLoading(false));
    }, 500);
  }, [query]);

  return <div {...props} />;
}
