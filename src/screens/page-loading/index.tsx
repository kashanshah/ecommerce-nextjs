import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import React from "react";

type PageLoadingProps = {
  isLoading?: boolean;
};

export const PageLoading = (props: PageLoadingProps) => {
  const isLoading = useSelector((state: RootState) => state.common.isPageLoading);

  return (
    <div className={`body_overlay ${isLoading && 'active'}`}>

    </div>
  );
};
