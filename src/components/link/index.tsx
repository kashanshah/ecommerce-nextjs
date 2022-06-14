import React, {ReactElement} from "react";
import {useGoToUrl} from "../../utils/url";
import {useRouter} from "next/router";
import {LinkProps} from "next/link";

type ActiveLinkProps = {
  href: string;
  className?: string;
  children?: React.ReactElement;
  style?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>['style'];
}

export const Link = (props: LinkProps & ActiveLinkProps) => {
  const {href, className = '', as, style, ...rest} = props;
  const goToUrl = useGoToUrl();

  return <span style={{cursor: 'pointer', ...style}} className={className} onClick={() => goToUrl(href)} {...rest} />
}
