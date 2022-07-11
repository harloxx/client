import { Dispatch, SetStateAction } from 'react';

export type PlayList = {
  id: number;
  title: string;
  singer: string;
  imgurl: string;
};
export type AllPlayList = {
  id: number;
  title: string;
  playlist: PlayList[];
};

export type Song = {
  title: string;
  singer: string;
  url: string;
  progress: number;
  length: number;
};
export type Songs = {
  title: string;
  singer: string;
  url: string;
  progress: number;
  length: number;
}[];

export type setCurrentSong = React.Dispatch<
  React.SetStateAction<{
    title: string;
    singer: string;
    url: string;
    progress: number;
    length: number;
  }>
>;
