// @flow
// import type { PageBlock } from './blocks';
// import type { ThumbedImageField } from './fields';
import type {
  BlocksPage,
  BlogRoll,
  BlogPost,
  CaseRoll,
  CaseStudy,
  HomePage,
} from './pages';

export type TopbarPageLink = {
  title: string,
  url?: string,
  id?: number,
  link?: string,
}

export type TopbarHomeLink = {
  id: number,
  alt?: string,
  url: string,
}

export type TopbarProps = {
  slide: boolean,
  links: Array<TopbarPageLink>,
  goToLink: Function,
  toggle: Function,
  goToPage: Function,
  home: TopbarHomeLink,
};

export type LocationProps = {
  hash: string,
  key: string,
  pathname: string,
  search: string,
  state: BlocksPage | BlogRoll | BlogPost | CaseRoll | CaseStudy | HomePage,
};

export type PageComponentProps = {
  location: LocationProps,
  toPage: Function,
  slide: boolean,
  modal: boolean,
  toggleModal: Function,
};
