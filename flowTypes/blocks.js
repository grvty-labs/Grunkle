// @flow
import type { CTAField, DecorationField, ThumbedImageField } from './fields';


export type PageBlockBase = {
  id: string,
  title: string,
  decoration: DecorationField,
  cta: CTAField,
};

export type CenterTextBlock = {
  id: string,
  title: string,
  decoration: DecorationField,
  cta: CTAField,

  subtitle?: string,
  paragraph: string,
  image?: ThumbedImageField,
};

export type HeaderBlock = {
  id: string,
  title: string,
  decoration: DecorationField,
  cta: CTAField,

  subtitle?: string,
  paragraph: string,
  image?: ThumbedImageField,
};

export type HeroBlock = {
  id: string,
  title: string,
  decoration: DecorationField,
  cta: CTAField,

  extra_cta: CTAField,
  subtitle?: string,
  paragraph: string,
  image?: ThumbedImageField,
  form: string,
};


export type SideImageBlock = {
  id: string,
  title: string,
  decoration: DecorationField,
  cta: CTAField,

  inline: boolean,
  paragraph: string,
  subtitle?: string,
  side: string,
  image: ThumbedImageField,
};

export type PageBlock = | CenterTextBlock | HeaderBlock | HeroBlock | SideImageBlock;
