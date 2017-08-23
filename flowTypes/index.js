// @flow

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

export type PageBlock = {
  id: string,
  title: string,
  type: string,
  decoration: {
    background_color?: string,
    background_image?: {
      id: number,
      title: string,
      thumbs: {
        original: string,
        xs: string,
        sm: string,
        md: string,
      },
    },
  },
  cta: {
    text?: string,
    breed?: string,
    page?: number,
    link?: string,
    event?: string,
  },
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
  subtitle: string,

  body: Array<PageBlock>,  // FIXME: Not all pages have this. Intersection.
  description: string,  // FIXME: Not all pages have this. Intersection.
};

export type PageComponentProps = {
  currentPage: PageProps,
  toPage: Function,
  slide: boolean,
  modal: boolean,
  toggleModal: Function,
};
