import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

type PageLoadingProps = {
  isLoading?: boolean;
};

export const PageLoading = (props: PageLoadingProps) => {
  const isLoading = useSelector((state: RootState) => state.common.isPageLoading);

  return null;

  return (
    <div className={`loader_bg ${isLoading && 'show'}`}>
      <div className="loader"><img src="/images/loading.gif" alt="#"/></div>
    </div>
  );
};
