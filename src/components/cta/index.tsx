import React from "react";
import {Link} from "../link";

export type CTAProps = {
  text: string;
  link?: string;
  onClick?: () => void;
}

export const CTA = (props: CTAProps) => {
  const {text, link, ...rest} = props;

  if(!link) {
    return <span className="read_more d-inline-block" {...rest}><>{text}</></span>
  }

  return <Link className="read_more d-inline-block" href={link} {...rest}><>{text}</></Link>;
}
