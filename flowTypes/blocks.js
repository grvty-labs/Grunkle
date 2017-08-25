// @flow
import type {
  CTAField,
  ColumnField,
  DecorationField,
  MasonryImageField,
  MemberField,
  ThumbedImageField,
  SocialLinkField,
} from './fields';


export type PageBlockBase = {
  id: string,
  title: string,
  cta: CTAField,
  decoration: DecorationField,
};

export type CenterTextBlock = {
  id: string,
  title: string,
  cta: CTAField,
  decoration: DecorationField,

  subtitle: string,
  paragraph: string,
  image?: ThumbedImageField,
};

export type ColumnsBlock = {
  id: string,
  title: string,
  cta: CTAField,
  decoration: DecorationField,

  columns: Array<ColumnField>,
};

export type FeatureBlock = {
  id: string,
  title: string,
  cta: CTAField,
  decoration: DecorationField,

  features: Array<{
    title: string,
    paragraph: string,
    svg: {
      title: string,
      url: string,
    },
  }>,
}

export type HeaderBlock = {
  id: string,
  title: string,
  cta: CTAField,
  decoration: DecorationField,

  subtitle: string,
  paragraph: string,
  image?: ThumbedImageField,
};

export type HeroBlock = {
  id: string,
  title: string,
  cta: CTAField,
  decoration: DecorationField,

  extra_cta: CTAField,
  subtitle: string,
  paragraph: string,
  image?: ThumbedImageField,
  form: string,
};

export type MasonryBlock = {
  id: string,
  title: string,
  subtitle: string,
  description: string,
  images: Array<MasonryImageField>,
};

export type QuoteBlock = {
  id: string,
  title: string,
  cta: CTAField,
  decoration: DecorationField,

  name: string,
  position: string,
  company: string,
  photograph: ThumbedImageField,
  quote: string,
  social: Array<SocialLinkField>,
}

export type SideEmbeddedBlock = {
  id: string,
  title: string,
  cta: CTAField,
  decoration: DecorationField,

  paragraph: string,
  subtitle: string,
  side: string,
  embed: {
    html: string,
    thumbnail_url: string,
  },
};

export type SideImageBlock = {
  id: string,
  title: string,
  cta: CTAField,
  decoration: DecorationField,

  inline: boolean,
  paragraph: string,
  subtitle: string,
  side: string,
  image: ThumbedImageField,
};

export type TeamListBlock = {
  id: string,
  title: string,
  cta: CTAField,
  decoration: DecorationField,

  subtitle: string,
  paragraph: string,
  members: Array<MemberField>,
};

export type TotemsBlock = {
  id: string,
  title: string,
  cta: CTAField,
  decoration: DecorationField,

  totems: Array<{
    svg: {
      title: string,
      url: string,
    },
  }>
};

export type PageBlock =
  | CenterTextBlock
  | ColumnsBlock
  | FeatureBlock
  | HeaderBlock
  | HeroBlock
  | MasonryBlock
  | QuoteBlock
  | SideEmbeddedBlock
  | SideImageBlock
  | TeamListBlock
  | TotemsBlock;
