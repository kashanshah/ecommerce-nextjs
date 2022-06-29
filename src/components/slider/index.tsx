import React, { ReactNode } from 'react';
import Flickity, { FlickityOptions } from 'react-flickity-component';

type SliderProps = {
  className?: string;
  disableImagesLoaded?: boolean;
  elementType?: string;
  flickityRef?: (ref: Flickity) => void;
  options?: FlickityOptions;
  reloadOnUpdate?: boolean;
  static?: boolean;
  children: ReactNode;
};

export const Slider = (props: SliderProps) => {
  return <Flickity {...props} />;
};
