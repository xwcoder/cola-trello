import React from 'react';
import { useDrag } from 'react-dnd';
import { Card } from './card';
import { ICard } from '../../store';

export interface Props {
  card: ICard
  x: number
  y: number
  // eslint-disable-next-line react/require-default-props
  placeholder?: boolean
}

export function DragCard({
  card,
  x,
  y,
  placeholder = false,
}: Props) {
  const [, drag] = useDrag({
    type: 'card',
    item: {
      card,
      x,
    },
    options: {
      dropEffect: 'move',
    },
  }, []);

  const style = placeholder ? { opacity: '0.5' } : {};

  return (
    <div
      ref={drag}
      className="card"
      data-index={y}
      style={style}
    >
      <Card
        card={card}
      />
    </div>
  );
}
