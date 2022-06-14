import React, {ReactElement} from "react";
import {useGoToUrl} from "../../utils/url";
import {useRouter} from "next/router";

type ActiveLinkProps = {
  href: string;
  className?: string;
  activeClassName?: string;
  children: any;
}

export const ActiveLink = (props: ActiveLinkProps) => {
  const {href, className, activeClassName = 'active', ...rest} = props;
  const goToUrl = useGoToUrl();
  const {pathname} = useRouter();
  const isActive = pathname === href;

  return <span onClick={() => goToUrl(href)} className={`${className} ${isActive && activeClassName}`} {...rest} />
}
