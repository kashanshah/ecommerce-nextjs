import React, {ReactElement} from "react";
import {useGoToUrl} from "../../utils/url";
import {useRouter} from "next/router";

type ActiveLinkProps = {
  href: string;
  className?: string;
  activeClassName?: string;
  children?: React.ReactElement;
  style?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>['style'];
}

export const ActiveLink = (props: ActiveLinkProps) => {
  const {href, className, activeClassName = 'active', style, ...rest} = props;
  const goToUrl = useGoToUrl();
  const {pathname} = useRouter();
  const isActive = pathname === href;

  return <span onClick={() => goToUrl(href)} className={`${className} ${isActive && activeClassName}`} style={{cursor: 'pointer', ...style}} {...rest} />
}
