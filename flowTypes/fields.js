// @flow
export type ThumbedImageField = {
  id: number,
  title: string,
  thumbs: {
    original: string,
    xs: string,
    sm: string,
    md: string,
    lg?: string,
    xl?: string,
  },
};

export type DecorationField = {
  background_color: string,
  background_image?: ThumbedImageField,
};

export type CTAField = {
  text?: string,
  breed: string,
  page?: number,
  link?: string,
  event?: string,
};
