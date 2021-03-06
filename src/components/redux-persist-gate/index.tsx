import React from 'react';
import { PersistGate, PersistGateProps } from 'redux-persist/integration/react';
import { constants } from '../../utils/constants';

export const ReduxPersistGate = (props: PersistGateProps) => {
  if (!constants?.isReduxPersistEnabled) {
    return <>{props.children}</>;
  }

  return <PersistGate {...props} />;
};
