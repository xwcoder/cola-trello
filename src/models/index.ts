import { Models } from '@rematch/core';
import { lists } from './lists';

export interface RootModel extends Models<RootModel> {
  lists: typeof lists
}

export const models: RootModel = { lists };

export type { ICard, IList } from './lists';
