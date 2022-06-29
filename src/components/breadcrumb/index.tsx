import React from "react";
import Link from "next/link";
import {Breadcrumb as AntBreadCrumbs, BreadcrumbProps as Props} from "antd";

type BreadcrumbProps = Props & {}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const {...rest} = props

  return <div className="breadcrumb_content">
    <AntBreadCrumbs separator={'>'} itemRender={(route, params, routes, paths) => {
      const last = routes.indexOf(route) === routes.length - 1;
      return last ? (
        <span>{route.breadcrumbName}</span>
      ) : (
        <Link href={route.path}>{route.breadcrumbName}</Link>
      );
    }} {...rest}/>
  </div>
}
