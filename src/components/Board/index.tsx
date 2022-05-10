import React from 'react';
import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RootState } from '../../store';
import List from '../List';

export default function Board() {
  const lists = useSelector((state: RootState) => state.lists);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="absolute inset-0 flex flex-col">
        <div className="h-44px text-light-300">
          I am board header
        </div>
        <main className="flex-1 box-border px-4 pb-12 whitespace-nowrap overflow-x-auto">
          {lists.map((list, index) => (
            <List
              key={list.id}
              list={list}
              index={index}
            />
          ))}
        </main>
      </div>
    </DndProvider>
  );
}
