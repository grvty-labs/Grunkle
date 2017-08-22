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

  description?: string,
};
