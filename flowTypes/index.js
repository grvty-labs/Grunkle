// @flow

export type TopbarPageLink = {
  title: string,
  slug?: string,
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
