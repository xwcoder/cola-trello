import React from 'react';
import ListBody from './list-body';
import { IList } from '../../store';

interface Props {
  list: IList
  index: number
}

export default function List({ list, index }: Props) {
  const { name, cards } = list;

  return (
    <div className="inline-block text-sm text-neutral-700 box-border w-272px h-[100%] mx-1 bg-zinc-300 rounded">
      <div className="flex flex-col h-[100%]">
        <div className="font-bold text-dark-100 px-2 py-1">
          {name}
        </div>
        <ListBody
          cards={cards}
          index={index}
        />
      </div>
    </div>
  );
}
