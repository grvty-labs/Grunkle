// @flow
export type SocialLinkField = {
  link: string,
};

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
  page?: {
    id: number,
    url: string,
  },
  link?: string,
  event?: string,
};

export type ColumnField = {
  title: string,
  paragraph: string,
  image?: ThumbedImageField,
};

export type MasonryImageField = {
  title: string,
  info: string,
  image: ThumbedImageField,
};

export type MemberField = {
  name: string,
  description: string,
  position: string,
  photograph: ThumbedImageField,
  social: Array<SocialLinkField>,
};
