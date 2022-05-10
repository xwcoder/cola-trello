import { createModel } from '@rematch/core';
import faker from 'faker';
import type { RootModel } from '.';

export interface ICard {
  id: number
  firstName: string
  lastName: string
  title: string
}

export interface IList {
  id: number
  name: string
  cards: ICard[]
}

const state: IList[] = [];
let id = 0;
for (let i = 0; i < 10; i += 1) {
  const cards: ICard[] = [];
  const randomCount = Math.floor(Math.random() * 9) + 1;

  for (let k = 0; k < randomCount; k += 1) {
    cards.push({
      id,
      firstName: faker.name.firstName() as string,
      lastName: faker.name.lastName() as string,
      title: faker.name.jobTitle() as string,
    });
    id += 1;
  }
  state.push({
    id: i,
    name: faker.commerce.productName(),
    cards,
  });
}

interface CardPos {
  x: number
  y: number
}

export const lists = createModel<RootModel>()({
  state: [...state],
  reducers: {
    moveCard(st, { from, to }: { from: { x: number, card: ICard }, to: CardPos}) {
      const { x, card } = from;
      const y = st[x].cards.findIndex((v) => v.id === card.id);

      if (from.x === to.x && y === to.y) {
        return;
      }

      const fromList = st[from.x].cards;
      const toList = st[to.x].cards;

      if (from.x === to.x) {
        if (to.y > y) {
          toList.splice(to.y, 0, card);
          fromList.splice(y, 1);
        } else {
          fromList.splice(y, 1);
          toList.splice(to.y, 0, card);
        }
      } else {
        toList.splice(to.y, 0, fromList[y]);
        fromList.splice(y, 1);
      }
    },
  },
});
