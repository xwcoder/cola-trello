import React from 'react';
import { ICard } from '../../store';

interface Props {
  card: ICard
  // eslint-disable-next-line react/require-default-props
  placeholder?: boolean
}

export function Card({ card, placeholder = false }: Props) {
  const {
    firstName,
    lastName,
    title,
    id,
  } = card;
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="bg-white px-2 rounded mb-2 whitespace-normal relative">
      {placeholder ? <div className="absolute inset-0 z-10 bg-zinc-400 rounded" /> : null}
      <div className="py-1 border-b">
        {title}
      </div>
      <div className="flow-root py-2">
        <img
          className="w-50px h-50px rounded-1/2 float-left mx-1.5"
          src={`https://randomuser.me/api/portraits/med/men/${id}.jpg`}
          alt={fullName}
        />
        <div>
          <div className="font-bold">
            {fullName}
          </div>
          <p>
            This page is an overview of the React documentation and related resources.
          </p>
        </div>
      </div>
    </div>
  );
}
