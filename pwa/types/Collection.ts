/* eslint-disable @typescript-eslint/ban-types */
export interface PagedCollection<T> {
  '@context'?: string;
  '@id'?: string;
  '@type'?: string;
  'hydra:firstPage'?: string;
  'hydra:itemsPerPage'?: number;
  'hydra:lastPage'?: string;
  'hydra:member'?: T[];
  'hydra:nextPage'?: string;
  'hydra:search'?: object;
  'hydra:totalItems'?: number;
}

export interface MentorCardCollection {
  index?: number;
  id?: string;
  imageSource: string;
  name: string;
  job: string;
  text: string;
  time: string;
}

export type MentorCardArrayCollection = MentorCardCollection[];
