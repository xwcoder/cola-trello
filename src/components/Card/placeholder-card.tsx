import React from 'react';
import { Card } from './card';
import { ICard } from '../../store';

interface Props {
  card: ICard
}

export function PlaceHolderCard({ card }: Props) {
  return (<Card card={card} placeholder />);
}
