import React from "react";
import Image from 'next/image';
import {Link} from "../link";
import {CTA, CTAProps} from "../cta";

type ImageTextSectionProps = {
  title?: string;
  text?: string;
  cta?: CTAProps;
  image?: string;
}

export const ImageTextSection = (props: ImageTextSectionProps) => {
  const {title, text, cta, image} = props;

  return (<div className="about">
    <div className="container-fluid">
      <div className="row d_flex">
        <div className="col-md-6">
          <div className="titlepage text_align_left">
            {cta && <CTA text={cta?.text} link={cta?.link} />}
          </div>
        </div>
        <div className="col-md-6 pa_right0">
          <div className="about_img">
            <figure>
              <Image src={image} alt={title} width="100%" height="100%" layout="responsive" objectFit="contain"/>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
