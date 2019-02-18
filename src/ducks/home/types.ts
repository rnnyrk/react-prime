import * as i from 'types';

export interface HomeState {
  loading: boolean;
  data?: i.HomeData;
}

export type HomeData = {
  header_image: i.Image;
  images: i.Image[];
};

export type GetHomeAction = () => i.ThunkAction;
