// @flow
import type { PageBlock } from './blocks';
import type { ThumbedImageField } from './fields';

export type TopbarPageLink = {
  title: string,
  url?: string,
  id?: number,
  link?: string,
}

export type TopbarHomeLink = {
  id: number,
  alt?: string,
}

export type TopbarProps = {
  slide: boolean,
  links: Array<TopbarPageLink>,
  goToLink: Function,
  toggle: Function,
  goToPage: Function,
  home: TopbarHomeLink,
};

export type BlockComponentProps = {
  slide: boolean,
  value: PageBlock,
  type: string,
  toPage: Function,
  id: string,
};

export type AuthorPreview = {
  id: number,
  first_name: string,
  last_name: string,
};

export type BlogPostPreview = {
  id: number,
  author: AuthorPreview,
  title: string,
  slug: string,
  date: string,
  promote_image_thumb: string,
  tags: Array<string>,
  type: string,
  html_url: string,
  url: string,
};

export type CaseStudyPreview = {
  id: number,
  title: string,
  slug: string,
  search_description: string,
  subtitle: string,
  header_image_thumbs: ThumbedImageField,
  tags: Array<string>,

  type: string,
  html_url: string,
  url: string,
};

export type CompanyPostPreview = {
  id: number,
  title: string,
  slug: string,
  subtitle: string,
  promote_image_thumb: string,
  tags: Array<string>,
  type: string,
  html_url: string,
  url: string,
};

export type PageMetaProps = {
  type: string,
  detail_url: string,
  html_url: string,
  slug: string,
  show_in_menus: boolean,
  seo_title: string,
  search_description: string,
  first_published_at: string,
  parent?: {
    id: number,
    meta: {
      type: string,
      detail_url: string,
      html_url: string,
    },
    title: string,
  }
};

export type PageProps = {
  id: number,
  meta: PageMetaProps,
  title: string,
  promote_image_thumb?: string,
  url: string,

  user?: any,
  description?: string,
  header_image?: ThumbedImageField,
  subtitle?: string,
  description?: string,
  author?: AuthorPreview,
  date?: string,
  body?: string | Array<BlockComponentProps>,
  tags?: Array<string>,
  posts?: Array<BlogPostPreview> | Array<CompanyPostPreview>,
  cases?: Array<CaseStudyPreview>,

  // Author
  // user: UserField,
  // description: string,
  // header_image: ThumbedImageField,

  // BlogRoll
  // subtitle: string,
  // description: string,
  // posts: Array<BlogPostPreview>,

  // BlogPost
  // author: AuthorPreview,
  // date: string,
  // body: string,
  // tags: Array<string>,

  // CaseRoll
  // subtitle: string,
  // description: string,
  // cases?: Array<CaseStudyPreview>,

  // CaseStudy
  // subtitle: string,
  // header_image: ThumbedImageField,
  // body: Array<BlockComponentProps>,
  // tags: Array<string>,

    // CompanyRoll
    // subtitle: string,
    // description: string,

    // CompanyPost
    // subtitle: string,
    // header_image: ThumbedImageField,
    // body: Array<BlockComponentProps>,
    // tags: Array<string>,

    // Blocks page
    // body: Array<BlockComponentProps>,

    // Home page
    // body: Array<BlockComponentProps>,
};

export type BlogRoll = {
  id: number,
  meta: PageMetaProps,
  title: string,
  promote_image_thumb?: string,
  url: string,

  subtitle: string,
  description: string,
  posts: Array<BlogPostPreview>,

  slide: boolean,
  toPage: Function,
};

export type BlogPost = {
  id: number,
  meta: PageMetaProps,
  title: string,
  promote_image_thumb?: string,
  url: string,

  author: AuthorPreview,
  date: string,
  body: string,
  tags: Array<string>,

  slide: boolean,
  toPage: Fuction,
}

export type PageComponentProps = {
  currentPage: PageProps,
  toPage: Function,
  slide: boolean,
  modal: boolean,
  toggleModal: Function,
};
